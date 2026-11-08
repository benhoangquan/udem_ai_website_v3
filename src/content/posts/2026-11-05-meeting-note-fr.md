# De la modération fragile aux World Models : ce qui se trame vraiment en AI Safety

Lors de notre dernière discussion d’équipe, on a décortiqué un paradoxe qui hante l’écosystème IA : plus nos modèles deviennent autonomes, plus nos méthodes actuelles de modération montrent leurs limites. Entre failles de sécurité dans l’*open weights*, intuitions de recherche et redéfinition du rôle d'ingénieur, tour d’horizon des idées clés qui animent nos travaux.

---

### 1. Pourquoi la modération classique est dans l’impasse

La sécurité des LLM a longtemps reposé sur des béquilles superficielles :

* **Le filtrage post-hoc :** Intercepter la réponse finale d’un modèle pour bloquer les sorties dangereuses. Problème : sur les modèles *open weights*, l’information reste accessible dans les poids et les couches latentes.
* **Le monitoring du *Chain-of-Thought* (CoT) :** Surveiller le raisonnement pas à pas. Problème : un réseau peut encoder de l’information de façon implicite entre les étapes sans déclencher d’alarme directe.
* **Le *Safe-by-Design* et ses dilemmes :** 
  * *Deep Ignorance* (filtrer les données avant entraînement) : Cela crée d'énormes trous conceptuels qui dégradent les performances générales du modèle (par exemple, castrer la biologie générale pour éviter les armes biochimiques).
  * *Machine Unlearning* (désapprendre post-entraînement) : Très fragile. Sur un modèle ouvert, quelques dizaines de minutes de fine-tuning et une dizaine de dollars de compute suffisent souvent à restaurer les connaissances ciblées.

---

### 2. Piste de recherche : « Drowning the fish »

Face à la facilité de contourner l'oubli, l'idée n'est plus d'effacer une information, mais de la **noyer sous une masse critique de fausses données plausibles**. 

L'hypothèse expérimentale : intoxiquer intentionnellement un modèle sur un domaine précis avec des données synthétiques fausses rendrait le réapprentissage ultérieur infiniment plus complexe et coûteux qu'un simple masque d'inhibition. Un protocole test est en préparation sur un sous-ensemble technique inoffensif (ex. calcul différentiel ciblé) avant d'évaluer la résilience face aux attaques de fine-tuning.

---

### 3. Modèles autorégressifs vs *World Models*

Un LLM autorégressif prédit le token suivant en convergeant vers la moyenne statistique de sa distribution passée. Même optimisé par des harnesses poussés, il excelle dans la synthèse et la recombinaison, mais peine à capturer la créativité divergente ou la dynamique physique du réel.

C’est là que le virage vers les **World Models** (inspirés de la robotique et des représentations latentes de l’environnement) change la donne. Plutôt que de compresser du texte issu du web, ces architectures apprennent une dynamique causale du monde, ouvrant la voie à une planification et une anticipation nettement plus solides.

---

### 4. L'artisanat du code à l’ère du *Vibe Coding*

À mesure que l’automatisation gagne du terrain — des pipelines de déploiement jusqu'à l’écriture des kernels GPU —, une question revient souvent : pourquoi continuer à coder ou à formaliser des maths à la main ?

La réponse tient en un mot : **le *taste*** (le discernement technique). 

Comme le rappelle Grant Sanderson (*3Blue1Brown*), la valeur d’un chercheur ou d’un ingénieur ne réside pas dans le calcul brut, mais dans la structure mentale qui permet d'abstraire et de formuler les bonnes questions. Manipuler les briques de base à la main — dériver une preuve, coder son propre optimiseur — reste le seul moyen d’aiguiser son intuition pour détecter les hallucinations subtiles quand l'IA accélère l'exécution en arrière-plan.

---

### Next steps

* **Projet expérimental :** Tests initiaux sur l'intoxication de raisonnement (*reasoning poisoning*) et la robustesse de l'unlearning.
* **Calendrier :** Prochaine session en salle 3195 (ou à distance) et participation au hackathon Google.
