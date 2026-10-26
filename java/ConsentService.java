import java.time.*;
import java.util.*;
/** In-memory domain model. Caller identity must come from a trusted authentication layer. */
public final class ConsentService {
 public record Consent(String id,String subject,String client,Set<String> scopes,Instant expires,boolean revoked) {}
 private final Map<String,Consent> store=new HashMap<>();
 private final Clock clock;
 public ConsentService(Clock clock){this.clock=Objects.requireNonNull(clock);}
 public synchronized Consent grant(String subject,String client,Set<String> scopes,Duration ttl){
  if(subject==null||subject.isBlank()||client==null||client.isBlank()||scopes==null||scopes.isEmpty()||!Set.of("profile:read","accounts:read").containsAll(scopes)||ttl==null||ttl.isNegative()||ttl.isZero()||ttl.compareTo(Duration.ofDays(90))>0) throw new IllegalArgumentException("invalid_consent");
  var c=new Consent(UUID.randomUUID().toString(),subject,client,Set.copyOf(scopes),clock.instant().plus(ttl),false);store.put(c.id(),c);return c;
 }
 public synchronized boolean permits(String id,String subject,String client,String scope){
  var c=store.get(id);return c!=null&&!c.revoked()&&c.subject().equals(subject)&&c.client().equals(client)&&c.scopes().contains(scope)&&clock.instant().isBefore(c.expires());
 }
 public synchronized void revoke(String id,String subject){
  var c=store.get(id);if(c==null||!c.subject().equals(subject))throw new SecurityException("not_found");
  store.put(id,new Consent(c.id(),c.subject(),c.client(),c.scopes(),c.expires(),true));
 }
}
