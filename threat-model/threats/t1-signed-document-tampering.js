(function () {
  var threat = {
    "id": "T1",
    "name": "Signed Document Tampering",
    "desc": "An attacker with access to a [=O2|signed document=] (while it is [=F1|transmitted to a holder=], kept at rest in [=S2|holder storage=], or [=F2|transmitted to a verifier=]) modifies its contents to alter the claims it expresses. For example, an attacker might change the subject of a university degree credential, alter the amount on a signed invoice, or insert statements that the [=E1|signer=] never made. A related variant strips the proof from a [=O2|signed document=] entirely, or removes individual proofs from a proof set, in the hope that a downstream system will process the document without noticing the missing protection. Detecting modification of signed information, wherever it occurs in the document’s lifecycle, is the central capability that the Data Integrity specification was designed to provide.",
    "response": [
      {
        "id": "R1",
        "name": "Cryptographic Proof Verification",
        "type": "Reduce",
        "desc": "The [=P5|verify=] process re-executes the cryptosuite’s transformation and hashing over the received [=O2|signed document=] and cryptographically verifies the <code>proofValue</code> against the [=E1|signer=]’s public key, so any modification of the protected information causes verification to fail. Verification detects tampering rather than preventing it, and residual risks remain: an incorrect canonicalization algorithm could allow two semantically different documents to produce the same canonical form, some signature schemes allow new proofs to be created over already-signed messages (for example, ECDSA is not strongly unforgeable), and some signature libraries omit required verification checks. Proof stripping is not detectable by cryptographic means; [=E3|verifiers=] reject documents that do not carry the proofs their policy requires."
      },
      {
        "id": "R2",
        "name": "Transformation Binds Proofs to Information Content",
        "type": "Reduce",
        "desc": "Cryptosuites [=P1|transform=] the document into a canonical form before [=P2|hashing=] and signing, binding the proof to the information content of the document rather than to one specific byte serialization. Benign changes such as whitespace, property ordering, or re-serialization between compatible syntaxes do not invalidate the proof, while any change to the meaning of the protected statements does. This narrows the tampering surface to semantic changes, which are exactly the changes that the [=P5|verify=] process is designed to detect."
      }
    ],
    "elements": ["O2", "F1", "F2", "S2", "P4", "P5", "C2"],
    "tags": ["security"],
    "taxonomyName": "STRIDE",
    "taxonomyClass": "Tampering"
  };

  window.ThreatModel.register(threat);
})();
