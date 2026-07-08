(
  function () {
    var threatCategories = [{
      name: "Target Threats",
      id: "threat-model-target-threats",
      threats: ["T1"]
    },
    {
      name: "Implementation Threats",
      id: "threat-model-implementation-threats",
      threats: ["T2"]
    },
    {
      name: "Deployment Threats",
      id: "threat-model-deployment-threats",
      threats: ["T3"]
    },
    {
      name: "External Threats",
      id: "threat-model-external-threats",
      threats: ["T4"]
    },
    {
      name: "Dependency Threats",
      id: "threat-model-dependency-threats",
      threats: ["T5"]
    }
    ];

    window.ThreatModel.registerCategories(threatCategories);

    window.ThreatModel.registerElements({
      "E1": "E1: Signer",
      "E2": "E2: Holder",
      "E3": "E3: Verifier",
      "P1": "P1: Transform",
      "P2": "P2: Hash",
      "P3": "P3: Sign",
      "P4": "P4: Store",
      "P5": "P5: Verify",
      "F1": "F1: Transmit to Holder",
      "F2": "F2: Transmit to Verifier",
      "S1": "S1: Security Module",
      "S2": "S2: Holder Storage",
      "O1": "O1: Input Document",
      "O2": "O2: Signed Document",
      "C1": "C1: Signing System",
      "C2": "C2: Holder System",
      "C3": "C3: Verifier System"
    });

  })();
