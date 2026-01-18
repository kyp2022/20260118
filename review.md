Manuscript Number: FGCS-D-25-03713  

BRITE-FL: Blockchain-based Reputation and Incentive Token Enhanced Federated Learning for IoT Ecosystems

Dear Dr Liu,

Thank you for submitting your manuscript to Future Generation Computer Systems.

I have completed my evaluation of your manuscript. The reviewers recommend reconsideration of your manuscript following major revision. I invite you to resubmit your manuscript after addressing the comments below. Please resubmit your revised manuscript by Mar 17, 2026.

When revising your manuscript, please consider all issues mentioned in the reviewers' comments carefully: please outline every change made in response to their comments and provide suitable rebuttals for any comments not addressed. Please note that your revised submission may need to be re-reviewed. 

To submit your revised manuscript, please log in as an author at https://www.editorialmanager.com/fgcs/, and navigate to the "Submissions Needing Revision" folder. 

Research Elements (optional)
This journal encourages you to share research objects - including your raw data, methods, protocols, software, hardware and more – which support your original research article in a Research Elements journal. Research Elements are open access, multidisciplinary, peer-reviewed journals which make the objects associated with your research more discoverable, trustworthy and promote replicability and reproducibility. As open access journals, there may be an Article Publishing Charge if your paper is accepted for publication. Find out more about the Research Elements journals at https://www.elsevier.com/authors/tools-and-resources/research-elements-journals?dgcid=ec_em_research_elements_email.


Future Generation Computer Systems values your contribution and I look forward to receiving your revised manuscript.

Kind regards,  
Michela Taufer, Ph.D. 
Editor-in-Chief 

Future Generation Computer Systems

Editor and Reviewer comments:



Reviewer #1: The manuscript presents BRITE-FL, a consortium blockchain-enhanced federated learning framework tailored for IoT ecosystems. The framework integrates a reputation-token incentive mechanism with deposit penalties, and role separation between training and validation nodes to reinforce robustness and encourage fair participation. The study is technically sound and conceptually innovative, addressing long-standing challenges in federated learning such as malicious client behaviors, incentive imbalance, and trust management. The paper demonstrates a well-organized structure with clear motivation, system modeling, and workflow design. Experimental validation against data poisoning and label flipping attacks provides convincing empirical evidence, showing minimal accuracy degradation and strong anomaly detection performance even under 30% malicious participants. Overall, the work is rigorous, practically relevant, and suitable for publication after revisions to further enhance clarity, reproducibility, and analytical depth. Specific comments and suggestions are as follows:
1. To enhance reproducibility, the experimental setup should include a consolidated summary of critical parameters, such as datasets, model architectures, evaluation metrics, hyperparameters and blockchain configurations, preferably in a dedicated subsection or supplementary appendix.
2. The blockchain implementation section would benefit from explicit information on the consensus protocol (e.g., PBFT, PoA, or Raft), committee structure, and per-round operational metrics. Summarizing these in a table could improve precision and readability.
3. While results are robust, incorporating a sensitivity analysis for varying IoT network scales (e.g., from 100 to 1000 nodes) would strengthen scalability insights; additionally, the discussion should quantify computational overheads, such as blockchain transaction delays, to address feasibility in resource-constrained environments.
4. Figures are informative but could be refined for better legibility, particularly by enlarging font sizes in legends and annotations to facilitate interpretation.
5. The discussion could benefit from deeper analysis, for example, explaining the underperformance of comparative methods (e.g., ADPFL under label-flipping conditions) and highlighting potential synergies among the proposed mechanisms. Such insights would strengthen the theoretical and interpretive depth of the work.
6. A more comprehensive evaluation of operational scalability and costs is encouraged. This could include analysis of computational and communication overhead under expanded participant scales, and discussion of how transaction latency affects time-sensitive IoT applications.


Reviewer #2: The manuscript proposes a blockchain-based federated learning (FL) framework for IoT, called BRITE-FL. The topic is timely and relevant for FGCS. However, in its current form the paper reads as an incremental combination of existing ingredients, with several important gaps:
- the novelty versus prior blockchain-FL + reputation/incentive work is not sharply articulated;
- the technical specification of the framework (algorithms, reputation update, tokenomics) leaves key aspects underspecified or internally inconsistent;
- the experimental evaluation is limited in realism and does not convincingly support the strong security/robustness claims;
- there are many writing, formatting and referencing issues that make the manuscript harder to follow

Major points the authors should address in their revision:
1. Right now, the novelty is not convincingly separated from prior blockchain-FL systems with reputation and incentives. Several cited works already integrate blockchain with FL and address reputation, incentives, or malicious nodes. The contributions in the Introduction largely describe a combination of known building blocks.
2. The system model and algorithms are interesting but some parts are underspecified or inconsistent, making it hard to fully reproduce or reason about the protocol. Some symbols appear without prior definition or with inconsistent meaning (e.g., R_{ti} vs R_i; mixing time indices for reputations; S_i^j vs S_j; N'_t, N'_v; etc.).
3. The paper states that iForest is used on vectorized model parameters with anomaly scores s_{ij} (Eq. (13)-(14)), but it is not clear how the forest is trained, how often it is updated, and on what data distribution. Are forests trained globally, per validation node, per round? Are only "honest" updates used, and how is that determined in early rounds?
4. Algorithm 3 consensus among validation nodes is interesting, but you should clarify what happens when this condition repeatedly fails.
5. The token reward and deposit/penalty mechanisms (Section 4.5, Algorithms 5-6) are central to the claimed "incentive-compatible" nature of BRITE-FL, but they are only described at a formula level and not analyzed.
6. All experiments evaluate accuracy and detection rates, but none evaluate how rewards, deposits, or penalties actually evolve in practice.
7. The experimental section focuses almost exclusively on accuracy under synthetic attacks on MNIST/FMNIST, without addressing heterogeneity, scalability, communication cost, or blockchain overhead.
8. The description of data pollution and label-flipping attacks is too vague. For example: what fraction of each malicious client's data is corrupted? Are attacks always on, or do they start after some rounds? Are poisoned samples targeted or random?
9. The manuscript is generally understandable but needs a thorough language and formatting cleanup.


Reviewer #4: The manuscript addresses an important and timely problem at the intersection of federated learning, blockchain, and IoT ecosystems, and the overall motivation of enhancing security, trust, and incentivization in heterogeneous IoT environments is well articulated.

The proposed BRITE-FL framework is technically ambitious and integrates multiple components—blockchain infrastructure, reputation management, incentive tokens, anomaly detection, and role-based participation—into a unified system, which reflects substantial implementation effort.

The idea of combining dynamic reputation evaluation with token-based incentives and role separation (training and validation nodes) is interesting and relevant, particularly for large-scale and heterogeneous IoT deployments.

The manuscript is generally well structured, with a clear organization of preliminaries, system model, protocol design, and algorithmic descriptions, supported by detailed figures and formal algorithms.

However, the paper would benefit from a clearer and more focused articulation of its core novelty relative to existing blockchain-based federated learning frameworks. Several components, such as reputation systems, incentive mechanisms, and anomaly detection in FL, have been studied previously, and the manuscript should more explicitly highlight what is fundamentally new beyond their integration.

The experimental evaluation demonstrates robustness against data pollution and label-flipping attacks; however, additional experiments on more diverse datasets, stronger baselines, and different attack intensities would strengthen the empirical validation.

The computational and communication overhead introduced by blockchain operations, smart contracts, and validation nodes is not sufficiently quantified. A more detailed analysis of scalability, latency, and resource consumption would be valuable, especially for resource-constrained IoT devices.

While the reputation and token update formulas are mathematically detailed, further intuition and sensitivity analysis of key parameters (e.g., decay factors, reward weights, penalty coefficients) would improve clarity and reproducibility.

The manuscript would benefit from a more explicit discussion of limitations, including assumptions about trust in validation nodes, blockchain deployment costs, and potential vulnerabilities in adversarial settings.

The language is generally clear and professional, though some sections are dense and could be streamlined to improve readability and reduce repetition, particularly in the protocol and algorithm descriptions.

Overall, the work shows promise and addresses a relevant problem, but strengthening the novelty positioning, expanding experimental analysis, and providing deeper discussion on scalability and limitations would significantly improve the manuscript's quality and impact.




More information and support 

FAQ: How do I revise my submission in Editorial Manager?
https://service.elsevier.com/app/answers/detail/a_id/28463/supporthub/publishing/

FAQ: How can I reset a forgotten password?
https://service.elsevier.com/app/answers/detail/a_id/28452/supporthub/publishing/kw/editorial+manager/

For further assistance, please visit our customer service site: https://service.elsevier.com/app/home/supporthub/publishing/. Here you can search for solutions on a range of topics, find answers to frequently asked questions, and learn more about Editorial Manager via interactive tutorials. You can also talk 24/7 to our customer support team by phone and 24/7 by live chat and email.

At Elsevier, we want to help all our authors to stay safe when publishing. Please be aware of fraudulent messages requesting money in return for the publication of your paper. If you are publishing open access with Elsevier, bear in mind that we will never request payment before the paper has been accepted. We have prepared some guidelines (https://www.elsevier.com/connect/authors-update/seven-top-tips-on-stopping-apc-scams ) that you may find helpful, including a short video on Identifying fake acceptance letters (https://www.youtube.com/watch?v=o5l8thD9XtE ). Please remember that you can contact Elsevier s Researcher Support team (https://service.elsevier.com/app/home/supporthub/publishing/) at any time if you have questions about your manuscript, and you can log into Editorial Manager to check the status of your manuscript (https://service.elsevier.com/app/answers/detail/a_id/29155/c/10530/supporthub/publishing/kw/status/).

#AU_FGCS#

To ensure this email reaches the intended recipient, please do not delete the above code
