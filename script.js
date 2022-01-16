function addToScore(amount) {
  score = score + amount;
}

function checkForStorage(thingtocheck, normal, name) {
  if (thingtocheck) {
    console.log(thingtocheck);
    return Number(localStorage.getItem(name));
  } else {
    return normal;
  }
}

function changePriceColor(price, priceID) {
  if (score < price) {
    document.getElementById(priceID).style.color = "red";
  } else {
    document.getElementById(priceID).style.color = "black";
  }
}

  function buySpirit() {
    if (score >= Spiritcost) {
      score -= Spiritcost;
      Spirits += 1;
      Spiritcost = Math.round(Spiritcost * 1.25) ;
    }
  }

  function buyEMF_5() {
    if (score >= EMF_5cost) {
      score -= EMF_5cost;
      EMF_5s += 1;
      EMF_5cost = Math.round(EMF_5cost * 10) ;
    }
  }

  function buyWraith() {
    if (score >= Wraithcost) {
      score = score - Wraithcost;
      Wraiths = Wraiths + 1;
      Wraithcost = Math.round(Wraithcost * 1.25) ;
    }
  }

  function buyDotsprojector() {
    if (score >= Dotsprojectorcost) {
      score -= Dotsprojectorcost;
      Dotsprojectors += 1;
      Dotsprojectorcost = Math.round(Dotsprojectorcost * 10) ;
    }
  }

  function buyYurei() {
    if (score >= Yureicost) {
      score -= Yureicost;
      Yureis += 1;
      Yureicost = Math.round(Yureicost * 1.25) ;
    }
  }

  function buyFingerprint() {
    if (score >= Fingerprintcost) {
      score -= Fingerprintcost;
      Fingerprints += 1;
      Fingerprintcost = Math.round(Fingerprintcost * 10) ;
    }
  }

  function buyRevenant() {
    if (score >= Revenantcost) {
      score -= Revenantcost;
      Revenants += 1;
      Revenantcost = Math.round(Revenantcost * 1.25);
    }
  }

  function buySpiritbox() {
    if (score >= Spiritboxcost) {
      score -= Spiritboxcost;
      Spiritboxs += 1;
      Spiritboxcost = Math.round(Spiritboxcost * 10) ;
    }
  }

  function buyMare() {
    if (score >= Marecost) {
      score -= Marecost;
      Mares += 1;
      Marecost = Math.round(Marecost * 1.25) ;
    }
  }

  function buyGhostwriting() {
    if (score >= Ghostwritingcost) {
      score -= Ghostwritingcost;
      Ghostwritings += 1;
      Ghostwritingcost = Math.round(Ghostwritingcost * 10) ;
    }
  }

  function buyDemon() {
    if (score >= Demoncost) {
      score -= Demoncost;
      Demons += 1;
      Demoncost = Math.round(Demoncost * 1.25) ;
    }
  }

  function buyFreezing() {
    if (score >= Freezingcost) {
      score -= Freezingcost;
      Freezings += 1;
      Freezingcost = Math.round(Freezingcost * 1.25) ;
    }
  }

  function buyTheMimic() {
    if (score >= TheMimiccost) {
      score -= TheMimiccost;
      TheMimics += 1;
      TheMimiccost = Math.round(TheMimiccost * 1.25) ;
    }
  }

  function buyGhostorbs() {
    if (score >= Ghostorbscost) {
      score -= Ghostorbscost;
      Ghostorbss += 1;
      Ghostorbscost = Math.round(Ghostorbscost * 1.25) ;
    }
  }

  function updateSavedData(){
    localStorage.setItem("Money", score);
    localStorage.setItem("Spiritcost", Spiritcost);
    localStorage.setItem("Spirits", Spirits);
    localStorage.setItem("EMF_5cost", EMF_5cost);
    localStorage.setItem("EMF_5s", EMF_5s);
    localStorage.setItem("Wraithcost", Wraithcost);
    localStorage.setItem("Wraiths", Wraiths);
    localStorage.setItem("Dotsprojectorcost", Dotsprojectorcost);
    localStorage.setItem("Dotsprojectors", Dotsprojectors);
    localStorage.setItem("Yureicost", Yureicost);
    localStorage.setItem("Yureis", Yureis);
    localStorage.setItem("Fingerprintcost", Fingerprintcost);
    localStorage.setItem("Fingerprints", Fingerprints);
    localStorage.setItem("Revenantcost", Revenantcost);
    localStorage.setItem("Revenants", Revenants);
    localStorage.setItem("Spiritboxcost", Spiritboxcost);
    localStorage.setItem("Spiritboxs", Spiritboxs);
    localStorage.setItem("Marecost", Marecost);
    localStorage.setItem("Mares", Mares);
    localStorage.setItem("Ghostwritingcost", Ghostwritingcost);
    localStorage.setItem("Ghostwritings", Ghostwritings);
    localStorage.setItem("Demoncost", Demoncost);
    localStorage.setItem("Demons", Demons);
    localStorage.setItem("Freezingcost", Freezingcost);
    localStorage.setItem("Freezings", Freezings);
    localStorage.setItem("TheMimiccost", TheMimiccost);
    localStorage.setItem("TheMimics", TheMimics);
    localStorage.setItem("Ghostorbscost", Ghostorbscost);
    localStorage.setItem("Ghostorbss", Ghostorbss);
  }
    var clickingPower = 1;
    var score = checkForStorage(localStorage.Money, 0, "Money");
    var Spiritcost = checkForStorage(localStorage.Spiritcost, 15, "Spiritcost");
    var Spirits = checkForStorage(localStorage.Spirits, 0, "Spirits");
    var EMF_5cost = checkForStorage(localStorage.EMF_5cost, 100, "EMF_5cost");
    var EMF_5s = checkForStorage(localStorage.EMF_5s, 0, "EMF_5s");
    var Wraithcost = checkForStorage(localStorage.Wraithcost, 100, "Wraithcost");
    var Wraiths = checkForStorage(localStorage.Wraiths, 0, "Wraiths");
    var Dotsprojectorcost = checkForStorage(localStorage.Dotsprojectorcost, 1000, "Dotsprojectorcost");
    var Dotsprojectors = checkForStorage(localStorage.Dotsprojectors, 0, "Dotsprojectors");
    var Yureicost = checkForStorage(localStorage.Yureicost, 1000, "Yureicost");
    var Yureis = checkForStorage(localStorage.Yureis, 0, "Yureis");
    var Fingerprintcost = checkForStorage(localStorage.Fingerprintcost, 10000, "Fingerprintcost");
    var Fingerprints = checkForStorage(localStorage.Fingerprints, 0, "Fingerprints");
    var Revenantcost = checkForStorage(localStorage.Revenantcost, 12500, "Revenantcost");
    var Revenants = checkForStorage(localStorage.Revenants, 0, "Revenants");
    var Spiritboxcost = checkForStorage(localStorage.Spiritboxcost, 100000, "Spiritboxcost");
    var Spiritboxs = checkForStorage(localStorage.Spiritboxs, 0, "Spiritboxs");
    var Marecost = checkForStorage(localStorage.Marecost, 50000, "Marecost");
    var Mares = checkForStorage(localStorage.Mares, 0, "Mares");
    var Ghostwritingcost = checkForStorage(localStorage.Ghostwritingcost, 1000000, "Ghostwritingcost");
    var Ghostwritings = checkForStorage(localStorage.Ghostwritings, 0, "Ghostwritings");
    var Demoncost = checkForStorage(localStorage.Demoncost, 500000, "Demoncost");
    var Demons = checkForStorage(localStorage.Demons, 0, "Demons");
    var Freezingcost = checkForStorage(localStorage.Freezingcost, 10000000, "Freezingcost");
    var Freezings = checkForStorage(localStorage.Freezings, 0, "Freezings")
    var TheMimiccost = checkForStorage(localStorage.TheMimiccost, 500000, "TheMimiccost");
    var TheMimics = checkForStorage(localStorage.TheMimics, 0, "TheMimics");
    var Ghostorbscost = checkForStorage(localStorage.Ghostorbscost, 10000000, "Ghostorbscost");
    var Ghostorbss = checkForStorage(localStorage.Ghostorbss, 0, "Ghostorbss")

function ResetProgress() {
  localStorage.setItem("Money", 0);
  localStorage.setItem("Spiritcost", 15);
  localStorage.setItem("Spirits", 0);
  localStorage.setItem("EMF_5cost", 100);
  localStorage.setItem("EMF_5s", 0);
  localStorage.setItem("Wraithcost", 100);
  localStorage.setItem("Wraiths", 0);
  localStorage.setItem("Dotsprojectorcost", 1000);
  localStorage.setItem("Dotsprojectors", 0);
  localStorage.setItem("Yureicost", 1000);
  localStorage.setItem("Yureis", 0);
  localStorage.setItem("Fingerprintcost", 10000);
  localStorage.setItem("Fingerprints", 0);
  localStorage.setItem("Revenantcost", 12500);
  localStorage.setItem("Revenants", 0);
  localStorage.setItem("Spiritboxcost", 100000);
  localStorage.setItem("Spiritboxs", 0);
  localStorage.setItem("Marecost", 50000);
  localStorage.setItem("Mares", 0);
  localStorage.setItem("Ghostwritingcost", 1000000);
  localStorage.setItem("Ghostwritings", 0);
  localStorage.setItem("Demoncost", 500000);
  localStorage.setItem("Demons", 0);
  localStorage.setItem("Freezingcost", 7500000);
  localStorage.setItem("Freezings", 0);
  localStorage.setItem("TheMimiccost", 1000000);
  localStorage.setItem("TheMimics", 0);
  localStorage.setItem("Ghostorbscost", 20000000);
  localStorage.setItem("Ghostorbss", 0);
  window.location.reload(true);
}

  setInterval (function() {
    changePriceColor(Spiritcost, "Spiritcost");
    changePriceColor(EMF_5cost, "EMF_5cost");
    changePriceColor(Wraithcost, "Wraithcost");
    changePriceColor(Dotsprojectorcost, "Dotsprojectorcost");
    changePriceColor(Yureicost, "Yureicost");
    changePriceColor(Fingerprintcost, "Fingerprintcost");
    changePriceColor(Revenantcost, "Revenantcost");
    changePriceColor(Spiritboxcost, "Spiritboxcost");
    changePriceColor(Marecost, "Marecost");
    changePriceColor(Ghostwritingcost, "Ghostwritingcost");
    changePriceColor(Demoncost, "Demoncost");
    changePriceColor(Freezingcost, "Freezingcost");
    changePriceColor(TheMimiccost, "TheMimiccost");
    changePriceColor(Ghostorbscost, "Ghostorbscost");
  }, 100); //100ms = 0.1 second

  setInterval (function updatescorepersecond() {
      scorepersecond =
      (Spirits * (EMF_5s + 1)) +
      (Wraiths * 5 * (Dotsprojectors + 1)) +
      (Yureis * 20 * (Fingerprints + 1)) +
      (Revenants * 100 * (Spiritboxs + 1)) +
      (Mares * 300 * (Ghostwritings + 1)) +
      (Demons * 1600 * (Freezings + 1)) +
      (TheMimics * 5000 * (Ghostorbss + 1));

      document.getElementById("scorepersecond").innerHTML = scorepersecond;
      document.getElementById("score").innerHTML = score;
      document.getElementById("Spiritcost").innerHTML = Spiritcost;
      document.getElementById("Spirits").innerHTML = Spirits;
      document.getElementById("EMF_5cost").innerHTML = EMF_5cost;
      document.getElementById("EMF_5s").innerHTML = EMF_5s;
      document.getElementById("Wraithcost").innerHTML = Wraithcost;
      document.getElementById("Wraiths").innerHTML = Wraiths;
      document.getElementById("Dotsprojectorcost").innerHTML = Dotsprojectorcost;
      document.getElementById("Dotsprojectors").innerHTML = Dotsprojectors;
      document.getElementById("Yureicost").innerHTML = Yureicost;
      document.getElementById("Yureis").innerHTML = Yureis;
      document.getElementById("Fingerprintcost").innerHTML = Fingerprintcost;
      document.getElementById("Fingerprints").innerHTML = Fingerprints;
      document.getElementById("Revenantcost").innerHTML = Revenantcost;
      document.getElementById("Revenants").innerHTML = Revenants;
      document.getElementById("Spiritboxcost").innerHTML = Spiritboxcost;
      document.getElementById("Spiritboxs").innerHTML = Spiritboxs;
      document.getElementById("Marecost").innerHTML = Marecost;
      document.getElementById("Mares").innerHTML = Mares;
      document.getElementById("Ghostwritingcost").innerHTML = Ghostwritingcost;
      document.getElementById("Ghostwritings").innerHTML = Ghostwritings;
      document.getElementById("Demoncost").innerHTML = Demoncost;
      document.getElementById("Demons").innerHTML = Demons;
      document.getElementById("Freezingcost").innerHTML = Freezingcost;
      document.getElementById("Freezings").innerHTML = Freezings;
      document.getElementById("TheMimiccost").innerHTML = TheMimiccost;
      document.getElementById("TheMimics").innerHTML = TheMimics;
      document.getElementById("Ghostorbscost").innerHTML = Ghostorbscost;
      document.getElementById("Ghostorbss").innerHTML = Ghostorbss;
      document.title = score + "-Money - Phasmo clicker";
  }, 100) ; //100ms = 0.1 second

  setInterval (function() {
    score = score + (Spirits * (EMF_5s + 1));
    score = score + (Wraiths * 5 * (Dotsprojectors + 1));
  }, 1000) ; //1000ms = 1 second

  setInterval (function() {
    score = score + (0.1 * Yureis * 20 * (Fingerprints + 1));
  }, 100) ; //100ms = 0.1 second
  setInterval (function() {
    score = score + (0.01 * Revenants * 100 * (Spiritboxs + 1));
    score = score + (0.01 * Mares * 300 * (Ghostwritings + 1));
    score = score + (0.01 * Demons * 1600 * (Freezings + 1));
    score = score + (0.01 * TheMimics * 5000 * (Ghostorbss + 1));
  }, 10) ; //10ms = 0.01 second

  setInterval (function() {
    updateSavedData();
  }, 300000); //300000ms = 5 minutes
