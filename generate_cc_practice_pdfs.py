from pathlib import Path
import random
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    PageTemplate,
    Paragraph,
    Spacer,
    PageBreak,
    Table,
    TableStyle,
)


OUT_DIR = Path("output/pdf")
OUT_DIR.mkdir(parents=True, exist_ok=True)


QUESTION_BANK = [
    ("Which security principle ensures that information is only accessible to authorized users?", ["Confidentiality", "Integrity", "Availability", "Non-repudiation"], 0),
    ("Which principle is most directly affected when a database record is changed without approval?", ["Availability", "Integrity", "Confidentiality", "Privacy"], 1),
    ("Which security principle ensures systems and data are accessible when needed?", ["Availability", "Confidentiality", "Integrity", "Obfuscation"], 0),
    ("Which concept uses multiple layers of controls to protect assets?", ["Defense in depth", "Single sign-on", "Open trust", "Flat networking"], 0),
    ("Which term describes the possibility that a threat will exploit a vulnerability and cause harm?", ["Risk", "Asset", "Control", "Policy"], 0),
    ("Which item is an example of a vulnerability?", ["Weak password", "Malware actor", "Security policy", "Firewall"], 0),
    ("Which item is an example of a threat?", ["Phishing email", "Patched server", "Encryption key", "Access review"], 0),
    ("Which term describes the value or consequence if a risk occurs?", ["Impact", "Likelihood", "Safeguard", "Asset tag"], 0),
    ("Which risk response accepts the risk without adding further controls?", ["Acceptance", "Avoidance", "Transfer", "Mitigation"], 0),
    ("Which risk response stops the risky activity entirely?", ["Avoidance", "Transfer", "Acceptance", "Detection"], 0),
    ("Which risk response reduces likelihood or impact with controls?", ["Mitigation", "Acceptance", "Avoidance", "Transfer"], 0),
    ("Which risk response commonly uses insurance?", ["Transfer", "Avoidance", "Eradication", "Detection"], 0),
    ("What is residual risk?", ["Risk remaining after controls", "Risk before controls", "A guaranteed loss", "Risk that is illegal"], 0),
    ("Which control category includes security policies and standards?", ["Administrative", "Physical", "Technical", "Environmental"], 0),
    ("Which control category includes locks, fences, and badge readers?", ["Physical", "Technical", "Administrative", "Corrective"], 0),
    ("Which control category includes firewalls, encryption, and access control lists?", ["Technical", "Physical", "Administrative", "Directive"], 0),
    ("Which control type is designed to stop an event before it happens?", ["Preventive", "Detective", "Corrective", "Recovery"], 0),
    ("Which control type is designed to identify an event after or while it occurs?", ["Detective", "Preventive", "Corrective", "Compensating"], 0),
    ("Which control type is designed to restore normal conditions after an event?", ["Corrective", "Preventive", "Deterrent", "Directive"], 0),
    ("Which control type discourages unwanted behavior?", ["Deterrent", "Recovery", "Corrective", "Cryptographic"], 0),
    ("Which is the best example of a compensating control?", ["Extra monitoring when MFA cannot be used", "Disabling logging", "Removing passwords", "Ignoring failed logins"], 0),
    ("Which policy defines acceptable behavior when using company systems?", ["Acceptable Use Policy", "Disaster Recovery Plan", "Routing Table", "Data Dictionary"], 0),
    ("Which security concept protects personal data from improper use or disclosure?", ["Privacy", "Availability", "Routing", "Switching"], 0),
    ("Which principle helps prove that a sender cannot easily deny sending a message?", ["Non-repudiation", "Availability", "Anonymity", "Open access"], 0),
    ("Which practice applies protection according to data sensitivity?", ["Data classification", "Port forwarding", "Packet sniffing", "Load balancing"], 0),
    ("Which process proves a user is who they claim to be?", ["Authentication", "Authorization", "Accounting", "Segmentation"], 0),
    ("Which process determines what an authenticated user is allowed to access?", ["Authorization", "Authentication", "Identification", "Hashing"], 0),
    ("Which process tracks actions performed by users or systems?", ["Accounting", "Spoofing", "Masking", "Replication"], 0),
    ("Which access control principle gives users only the permissions needed for their job?", ["Least privilege", "Open access", "Implicit allow", "Privilege escalation"], 0),
    ("Which principle divides sensitive tasks among multiple people?", ["Separation of duties", "Single point of failure", "Default allow", "Data remanence"], 0),
    ("Which practice reduces fraud risk by periodically changing job responsibilities?", ["Job rotation", "Password reuse", "Open sharing", "Single approval"], 0),
    ("Which process grants a new user appropriate access?", ["Provisioning", "Deprovisioning", "Eradication", "Hashing"], 0),
    ("Which process removes access when an employee leaves?", ["Deprovisioning", "Provisioning", "Encryption", "Tokenization"], 0),
    ("Which account type should be most tightly controlled?", ["Privileged account", "Standard user account", "Guest account", "Training account"], 0),
    ("What is the main purpose of access reviews?", ["Confirm access remains appropriate", "Increase all access", "Remove authentication", "Disable audit logs"], 0),
    ("Which access model assigns permissions based on job function?", ["RBAC", "DAC", "MAC", "NAT"], 0),
    ("Which access model lets resource owners decide who receives access?", ["DAC", "RBAC", "MAC", "Rule-based firewalling"], 0),
    ("Which access model uses labels and clearances?", ["MAC", "DAC", "RBAC", "Open access"], 0),
    ("Which authentication factor is a password?", ["Something you know", "Something you have", "Something you are", "Somewhere you are"], 0),
    ("Which authentication factor is a smart card?", ["Something you have", "Something you know", "Something you are", "Something you do"], 0),
    ("Which authentication factor is a fingerprint?", ["Something you are", "Something you know", "Something you have", "Something you own"], 0),
    ("Which option is the best example of multi-factor authentication?", ["Password and fingerprint", "Password and PIN", "Username and password", "Password and security question"], 0),
    ("What is single sign-on designed to do?", ["Allow one authentication event to access multiple services", "Remove authorization checks", "Share one password among all users", "Disable account logging"], 0),
    ("What is a common risk of shared accounts?", ["Loss of individual accountability", "Stronger non-repudiation", "Improved auditing", "Automatic encryption"], 0),
    ("Which action best protects an unattended workstation?", ["Lock the screen", "Leave it logged in", "Disable the password prompt", "Share the session"], 0),
    ("Which protocol is commonly used for secure web browsing?", ["HTTPS", "HTTP", "Telnet", "FTP"], 0),
    ("Which port is commonly associated with HTTPS?", ["443", "80", "22", "25"], 0),
    ("Which port is commonly associated with HTTP?", ["80", "443", "53", "3389"], 0),
    ("Which protocol is commonly used for secure remote administration?", ["SSH", "Telnet", "FTP", "SMTP"], 0),
    ("Which port is commonly associated with SSH?", ["22", "21", "25", "53"], 0),
    ("Which protocol resolves host names to IP addresses?", ["DNS", "DHCP", "SMTP", "SNMP"], 0),
    ("Which port is commonly associated with DNS?", ["53", "22", "80", "443"], 0),
    ("Which protocol automatically assigns IP addresses to hosts?", ["DHCP", "DNS", "HTTPS", "FTP"], 0),
    ("Which protocol is commonly used to send email between mail servers?", ["SMTP", "DNS", "SSH", "RDP"], 0),
    ("Which device filters traffic based on security rules?", ["Firewall", "Hub", "Keyboard", "Repeater"], 0),
    ("Which device forwards packets between networks?", ["Router", "Printer", "Monitor", "Scanner"], 0),
    ("What is the main purpose of network segmentation?", ["Limit the spread of compromise", "Remove authentication", "Make all ports public", "Disable encryption"], 0),
    ("Which technology creates an encrypted tunnel over an untrusted network?", ["VPN", "DNS", "NAT", "DHCP"], 0),
    ("Which wireless security protocol is generally strongest among these choices?", ["WPA3", "WEP", "Open Wi-Fi", "Telnet"], 0),
    ("Which protocol is insecure because it sends traffic in plaintext?", ["Telnet", "SSH", "HTTPS", "SFTP"], 0),
    ("Which secure protocol is commonly used instead of Telnet?", ["SSH", "FTP", "HTTP", "SNMPv1"], 0),
    ("Which system can detect suspicious network activity?", ["IDS", "Word processor", "Spreadsheet", "Cable tester"], 0),
    ("Which system can actively block suspicious network traffic?", ["IPS", "Passive tap", "Text editor", "Cable tester"], 0),
    ("What does NAT commonly do?", ["Translates private addresses to public addresses", "Encrypts passwords", "Assigns roles", "Hashes files"], 0),
    ("What is a subnet used for?", ["Dividing a network into smaller logical networks", "Encrypting storage", "Authenticating users", "Destroying media"], 0),
    ("Which attack attempts to overwhelm a service so users cannot access it?", ["Denial of Service", "Phishing", "Spoofing", "SQL injection"], 0),
    ("Which attack uses many systems to overwhelm a target?", ["Distributed Denial of Service", "Vishing", "Tailgating", "Hashing"], 0),
    ("Which attack tricks users into revealing sensitive information?", ["Phishing", "Brute force", "Patching", "Load balancing"], 0),
    ("Which social engineering attack uses phone calls?", ["Vishing", "Smishing", "Hashing", "Patching"], 0),
    ("Which social engineering attack uses SMS messages?", ["Smishing", "Vishing", "Spoofing only", "Hardening"], 0),
    ("Which social engineering attack involves following someone into a restricted area?", ["Tailgating", "Ransomware", "SQL injection", "Encryption"], 0),
    ("Which attack searches discarded materials for sensitive information?", ["Dumpster diving", "Port scanning", "Patching", "Tokenization"], 0),
    ("Which attack captures network traffic to view sensitive data?", ["Sniffing", "Hardening", "Hashing", "Provisioning"], 0),
    ("Which attack impersonates a trusted user or system?", ["Spoofing", "Backup", "Encryption", "Segmentation"], 0),
    ("Which vulnerability is commonly caused by failing to validate user input?", ["SQL injection", "Shoulder surfing", "Tailgating", "Dumpster diving"], 0),
    ("Which malware encrypts files and demands payment?", ["Ransomware", "Worm", "Spyware", "Rootkit"], 0),
    ("Which malware spreads by replicating itself across systems?", ["Worm", "Logic bomb", "Trojan", "Adware"], 0),
    ("Which malware disguises itself as legitimate software?", ["Trojan", "Worm", "Botnet", "Adware"], 0),
    ("Which malware is designed to secretly collect information?", ["Spyware", "Patch", "Firewall", "Backup"], 0),
    ("Which practice helps protect against malware?", ["Maintain anti-malware tools", "Disable updates", "Share admin accounts", "Use default passwords"], 0),
    ("Which activity is part of system hardening?", ["Remove unnecessary services", "Enable every service", "Turn off logging", "Use shared passwords"], 0),
    ("Why should default passwords be changed?", ["They are widely known", "They are too long", "They prevent backups", "They encrypt disks"], 0),
    ("Which practice protects data if a laptop is stolen?", ["Full disk encryption", "Open Wi-Fi", "Disabled screen lock", "Shared local admin account"], 0),
    ("Which cryptographic process converts plaintext into ciphertext?", ["Encryption", "Hashing", "Compression", "Routing"], 0),
    ("Which cryptographic function creates a fixed-length value commonly used for integrity checks?", ["Hashing", "Symmetric encryption", "Asymmetric encryption", "Decryption"], 0),
    ("Which encryption type uses the same key to encrypt and decrypt data?", ["Symmetric", "Asymmetric", "Hash-based", "Public key only"], 0),
    ("Which encryption type uses public and private keys?", ["Asymmetric", "Symmetric", "Stream only", "Hashing"], 0),
    ("What is a digital signature commonly used to provide?", ["Integrity, authentication, and non-repudiation", "Availability only", "Network routing", "Physical access"], 0),
    ("Which technique masks real data while preserving realistic format for testing?", ["Data masking", "Port scanning", "Packet routing", "Tailgating"], 0),
    ("Which practice protects sensitive data that is no longer needed?", ["Secure disposal", "Public sharing", "Drive reuse without wiping", "Disabling encryption"], 0),
    ("Which type of information is usually considered sensitive personal information?", ["Government ID number", "Public office address", "Company logo", "Product brochure"], 0),
    ("Which log source is most useful for reviewing sign-in activity?", ["Authentication logs", "Weather logs", "Printer paper logs", "Marketing reports"], 0),
    ("What is the purpose of auditing?", ["Review activity and compliance", "Delete evidence", "Disable accounts", "Encrypt passwords"], 0),
    ("What is patch management?", ["Applying updates to fix security and stability issues", "Removing firewalls", "Creating phishing emails", "Disabling backups"], 0),
    ("Which security operation helps identify missing patches and weaknesses?", ["Vulnerability scanning", "Password sharing", "Tailgating", "Dumpster diving"], 0),
    ("Which process compares system settings against a secure standard?", ["Configuration review", "Social engineering", "Packet flooding", "Data exfiltration"], 0),
    ("What is security awareness training intended to reduce?", ["Human-related security mistakes", "All technical controls", "Need for backups", "Encryption key length"], 0),
    ("Which awareness topic helps users avoid malicious links?", ["Phishing recognition", "Cable management", "Screen resolution", "Disk partitioning"], 0),
    ("What is the first appropriate action when a user receives a suspicious email?", ["Report it through the approved process", "Forward it to everyone", "Click the link to test it", "Delete all system logs"], 0),
    ("Which activity confirms that implemented controls are working as intended?", ["Monitoring and review", "Password sharing", "Open access", "Unapproved software installation"], 0),
    ("Which document defines how essential operations continue during disruption?", ["Business Continuity Plan", "Password standard", "Data dictionary", "User manual"], 0),
    ("Which plan focuses on restoring IT systems after an outage?", ["Disaster Recovery Plan", "Acceptable Use Policy", "Privacy notice", "Hiring plan"], 0),
    ("What does RTO define?", ["Maximum tolerable time to restore service", "Maximum acceptable data loss", "Minimum password length", "Number of firewall rules"], 0),
    ("What does RPO define?", ["Maximum acceptable data loss", "Maximum time to restore service", "Number of users allowed", "Encryption key length"], 0),
    ("Which backup type copies all selected data each time?", ["Full", "Incremental", "Differential", "Archive metadata only"], 0),
    ("Which backup type copies changes since the last backup of any type?", ["Incremental", "Full", "Differential", "Mirror only"], 0),
    ("Which backup type copies changes since the last full backup?", ["Differential", "Incremental", "Full", "Hash"], 0),
    ("Why should backups be tested?", ["To ensure they can be restored", "To reduce password length", "To disable logging", "To increase malware spread"], 0),
    ("Which disaster recovery site has equipment and data ready for rapid use?", ["Hot site", "Cold site", "Empty site", "Manual site"], 0),
    ("Which disaster recovery site has space and basic infrastructure but little or no equipment?", ["Cold site", "Hot site", "Active site", "Mirrored site"], 0),
    ("Which disaster recovery site is partially equipped and faster than a cold site?", ["Warm site", "Cold site", "Empty site", "Manual site"], 0),
    ("Which incident response phase involves preparing policies, tools, and contacts before an incident?", ["Preparation", "Recovery", "Eradication", "Lessons learned"], 0),
    ("Which incident response phase confirms whether an event is an incident?", ["Detection and analysis", "Eradication", "Recovery", "Lessons learned"], 0),
    ("Which incident response step limits damage and prevents spread?", ["Containment", "Preparation", "Reporting", "Awareness"], 0),
    ("Which incident response step removes the root cause of an incident?", ["Eradication", "Identification", "Containment", "Notification"], 0),
    ("Which incident response step restores systems to normal operation?", ["Recovery", "Preparation", "Detection", "Policy writing"], 0),
    ("What should happen after an incident is resolved?", ["Lessons learned review", "Delete all records", "Ignore root cause", "Disable monitoring"], 0),
    ("Which evidence practice helps prove evidence was handled properly?", ["Chain of custody", "Load balancing", "Least privilege", "NAT"], 0),
    ("Why is documentation important during incident response?", ["It supports investigation and accountability", "It replaces containment", "It prevents every future attack", "It removes the need for backups"], 0),
    ("Which term describes returning a system to a trusted operational state?", ["Recovery", "Smishing", "Spoofing", "Data masking"], 0),
    ("Which metric helps determine how often backups should occur?", ["RPO", "MFA", "ACL", "NAT"], 0),
]


def make_styles():
    styles = getSampleStyleSheet()
    styles.add(ParagraphStyle(name="TitleCenter", parent=styles["Title"], alignment=TA_CENTER, fontSize=18, leading=22, spaceAfter=10))
    styles.add(ParagraphStyle(name="SmallCenter", parent=styles["Normal"], alignment=TA_CENTER, fontSize=9, leading=12, textColor=colors.HexColor("#444444")))
    styles.add(ParagraphStyle(name="Question", parent=styles["Normal"], fontSize=10, leading=13, spaceAfter=5))
    styles.add(ParagraphStyle(name="Choice", parent=styles["Normal"], fontSize=9, leading=12, leftIndent=14))
    styles.add(ParagraphStyle(name="Section", parent=styles["Heading2"], fontSize=13, leading=16, spaceBefore=8, spaceAfter=6, textColor=colors.HexColor("#1F4E79")))
    styles.add(ParagraphStyle(name="Note", parent=styles["Normal"], fontSize=9, leading=12, textColor=colors.HexColor("#555555")))
    return styles


def footer(canvas, doc):
    canvas.saveState()
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(colors.HexColor("#666666"))
    canvas.drawString(0.65 * inch, 0.42 * inch, "ISC2 CC Original Practice Exam - Study Aid")
    canvas.drawRightString(7.85 * inch, 0.42 * inch, f"Page {doc.page}")
    canvas.restoreState()


def build_pdf(set_num):
    rng = random.Random(20260730 + set_num)
    questions = QUESTION_BANK[:]
    rng.shuffle(questions)
    selected = questions[:100]

    pdf_path = OUT_DIR / f"CC_Practice_Exam_Set_{set_num:02d}.pdf"
    doc = BaseDocTemplate(
        str(pdf_path),
        pagesize=letter,
        rightMargin=0.65 * inch,
        leftMargin=0.65 * inch,
        topMargin=0.65 * inch,
        bottomMargin=0.65 * inch,
    )
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="normal")
    doc.addPageTemplates([PageTemplate(id="main", frames=[frame], onPage=footer)])
    styles = make_styles()
    story = []

    story.append(Paragraph(f"ISC2 CC Practice Exam Set {set_num}", styles["TitleCenter"]))
    story.append(Paragraph("100 original multiple-choice questions with answer key", styles["SmallCenter"]))
    story.append(Spacer(1, 0.12 * inch))
    story.append(Paragraph("This is original practice material for study. It is not an ISC2 exam dump and does not contain real exam questions.", styles["Note"]))
    story.append(Spacer(1, 0.15 * inch))
    story.append(Paragraph("Questions", styles["Section"]))

    answer_key = []
    letters = ["A", "B", "C", "D"]
    for idx, (question, choices, correct_idx) in enumerate(selected, 1):
        order = list(range(4))
        rng.shuffle(order)
        shuffled = [choices[i] for i in order]
        correct_letter = letters[order.index(correct_idx)]
        answer_key.append((idx, correct_letter))

        story.append(Paragraph(f"{idx}. {question}", styles["Question"]))
        for choice_letter, choice in zip(letters, shuffled):
            story.append(Paragraph(f"{choice_letter}. {choice}", styles["Choice"]))
        story.append(Spacer(1, 0.08 * inch))

    story.append(PageBreak())
    story.append(Paragraph(f"Answer Key - Set {set_num}", styles["TitleCenter"]))
    rows = [["Q", "Ans", "Q", "Ans", "Q", "Ans", "Q", "Ans"]]
    for i in range(25):
        row = []
        for block in range(4):
            qn, ans = answer_key[i + block * 25]
            row.extend([str(qn), ans])
        rows.append(row)
    table = Table(rows, colWidths=[0.45 * inch, 0.45 * inch] * 4)
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#1F4E79")),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
        ("FONTNAME", (0, 1), (-1, -1), "Helvetica"),
        ("FONTSIZE", (0, 0), (-1, -1), 9),
        ("GRID", (0, 0), (-1, -1), 0.25, colors.HexColor("#BBBBBB")),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, colors.HexColor("#F5F7FA")]),
    ]))
    story.append(table)
    doc.build(story)
    return pdf_path


def main():
    paths = [build_pdf(i) for i in range(1, 11)]
    for path in paths:
        print(path)


if __name__ == "__main__":
    main()
