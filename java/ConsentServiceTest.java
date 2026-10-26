import java.time.*;
import java.util.*;
public class ConsentServiceTest {
 static int checks=0;
 static void check(boolean ok){checks++;if(!ok)throw new AssertionError("check "+checks);}
 public static void main(String[] args){
 var now=Instant.parse("2026-01-01T00:00:00Z");var s=new ConsentService(Clock.fixed(now,ZoneOffset.UTC));
 var c=s.grant("customer-a","app-a",Set.of("accounts:read"),Duration.ofHours(1));
 check(s.permits(c.id(),"customer-a","app-a","accounts:read"));
 check(!s.permits(c.id(),"customer-b","app-a","accounts:read"));
 check(!s.permits(c.id(),"customer-a","app-b","accounts:read"));
 check(!s.permits(c.id(),"customer-a","app-a","profile:read"));
 try{s.revoke(c.id(),"customer-b");throw new AssertionError();}catch(SecurityException expected){checks++;}
 check(s.permits(c.id(),"customer-a","app-a","accounts:read"));
 s.revoke(c.id(),"customer-a");check(!s.permits(c.id(),"customer-a","app-a","accounts:read"));
 try{s.grant("a","b",Set.of("admin"),Duration.ofDays(1));throw new AssertionError();}catch(IllegalArgumentException expected){checks++;}
 var early=new ConsentService(Clock.offset(Clock.fixed(now,ZoneOffset.UTC),Duration.ZERO));
 var exp=early.grant("a","b",Set.of("profile:read"),Duration.ofNanos(1));
 check(!early.permits("missing","a","b","profile:read"));
 // Mutable clock verifies exact expiry boundary on the same store.
 final Instant[] time={now};Clock clock=new Clock(){public java.time.ZoneId getZone(){return ZoneOffset.UTC;}public Clock withZone(java.time.ZoneId z){return this;}public Instant instant(){return time[0];}};
 var timed=new ConsentService(clock);var tc=timed.grant("a","b",Set.of("profile:read"),Duration.ofSeconds(1));time[0]=now.plusSeconds(1);check(!timed.permits(tc.id(),"a","b","profile:read"));
 System.out.println(checks+" consent checks passed");
 }
}
