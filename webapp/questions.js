// AZ-900 ボーナス問題 自動生成データ（出典: MCP教科書 Microsoft Azure Fundamentals AZ-900 / 翔泳社）
window.QUESTIONS = [
 {
  "id": "q1",
  "number": 1,
  "type": "choice",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "Software as a Service(SaaS)モデルを使用する場合、顧客が管理するものは何ですか？",
  "choices": [
   {
    "key": "A",
    "text": "アプリケーション"
   },
   {
    "key": "B",
    "text": "コンピューティングリソース"
   },
   {
    "key": "C",
    "text": "アプリケーションデータ"
   },
   {
    "key": "D",
    "text": "ストレージ"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "1.2.3「 SaaS(Software as a Service)」",
  "explanation": "Software as a Service(SaaS)サービスモデルでは、クラウドサービスプロバイダーは、ハードウェア、OS、ミド\nルウェア、アプリを管理します。顧客が管理するものはアプリケーションデータです。"
 },
 {
  "id": "q2",
  "number": 2,
  "type": "truefalse",
  "chapter": 2,
  "chapterName": "Azureの基礎・コスト管理",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。誤っている場合は「いいえ」を選\n択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "可用性ゾーンを使用すると、Azure をデータセンターの障害から保護できます。",
   "可用性ゾーンを使用すると、Azure をリージョンの障害から保護できます。",
   "マネージドディスクのゾーン冗長ストレージを使用すると、データセンターの障害からマネージドディスクを保護できます。"
  ],
  "tfAnswers": [
   "はい",
   "いいえ",
   "はい"
  ],
  "review": "2.1.4「可用性ゾーン」、6.1.1「ストレージアカウントとは」",
  "explanation": "可用性ゾーンを使用すると、Azure をデータセンターの障害から保護できます。仮想マシンをリージョン内\nの複数のデータセンターに分散して配置することで、１つのデータセンターで障害が発生したとしてもすべての\n仮想マシンが影響を受けるという事態を避けることができます。したがって①の正解は「はい」です。\n\f    また、可用性ゾーンは 1 つのリージョンの中で異なるデータセンターにリソースをデプロイする仕組みのため、\nリージョンの障害には対応できません。したがって②の正解は「いいえ」です。\nそして、マネージドディスクは主に仮想マシンの記憶領域として使用されます。マネージドディスクのゾーン\n冗長ストレージを使用することで、記憶領域をゾーン (データセンター )にまたがって保持できます。したがって\n③の正解は「はい」です。",
  "supplement": "可用性ゾーンは、同じリージョン内にある“電源・冷却・ネットワークが独立した別々のデータセンター”です。ゾーンをまたいでデータや VM を置けば、1 つのデータセンターが丸ごと止まっても被害を避けられます。",
  "diagram": "availability-zones"
 },
 {
  "id": "q3",
  "number": 3,
  "type": "truefalse",
  "chapter": 3,
  "chapterName": "Azureの管理ツール・ガバナンス基礎",
  "text": "Azure サブスクリプションがあります。Azure portal にサインインし、RG1 という名前のリソースグループを作\n成します。以下のコマンドを使用して、VM1 を作成する必要があります。\naz vm create --resource-group RG1 --name VM1 --image UbuntuLTS --generate-ssh-keys\n次の操作で上記コマンドを使用し、VM を作成できますか？正しければ「はい」を選択してください。\n誤っている場合は「いいえ」を選択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Azure portal で Azure Cloud Shell を起動し、Bash を選択します。Azure Cloud Shell でコマンドを実行します。",
   "Azure portal で Azure Cloud Shell を起動し、PowerShell を選択します。 Azure Cloud Shell でコマンドを実行します。",
   "Windows 10 のコンピューターに、Azure CLI をインストールします。コマンドプロンプトを使用して Azure にサインインし、コマンドを実行します。"
  ],
  "tfAnswers": [
   "はい",
   "はい",
   "はい"
  ],
  "review": "3.2.2「 Azure PowerShell」、3.2.3「 Azure CLI」、3.2.4「 Azure Cloud Shell」",
  "explanation": "「 az」から始まるコマンドを実行できるのは Azure CLI です。Azure CLI は Windows、Linux、macO S にイン\nストールできます。そして、Windows PowerShell、コマンドプロンプト、Bash を使用して実行できます。また、\nAzure Cloud Shell には Azure CLI がインストールされており、PowerShell と Bash のスクリプトを実行できま\nす。"
 },
 {
  "id": "q4",
  "number": 4,
  "type": "choice",
  "chapter": 4,
  "chapterName": "コンピューティングサービス",
  "text": "メモリまたは CPU を追加することによって、仮想マシンのコンピューティング能力を向上させることを表す\n用語はどれですか？",
  "choices": [
   {
    "key": "A",
    "text": "敏捷性"
   },
   {
    "key": "B",
    "text": "弾力性"
   },
   {
    "key": "C",
    "text": "水平スケーリング"
   },
   {
    "key": "D",
    "text": "垂直スケーリング"
   }
  ],
  "correctAnswers": [
   "D"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "4.1.2「 Azure Virtual Machine Scale Sets」",
  "explanation": "メモリや CPU を追加して仮想マシンのコンピューティング能力を向上させることを垂直スケーリングといい\nます。",
  "supplement": "スケーリングには 2 種類あります。垂直（スケールアップ）は今ある VM 1 台の CPU・メモリを増やして“強く”すること。水平（スケールアウト）は VM の“台数”を増やすこと。問題文の「メモリや CPU を追加」は垂直スケーリングにあたります。",
  "diagram": "scaling"
 },
 {
  "id": "q5",
  "number": 5,
  "type": "choice",
  "chapter": 5,
  "chapterName": "ネットワークサービス",
  "text": "あなたは Azure に 20 台の仮想マシンを展開する計画があります。VM1 という仮想マシンを他の仮想マシ\nンとは接続できない状態にする必要があります。V M1 をどのように構成しますか？",
  "choices": [
   {
    "key": "A",
    "text": "異なる仮想ネットワークに展開する"
   },
   {
    "key": "B",
    "text": "他の仮想マシンとは異なる OS を実行する"
   },
   {
    "key": "C",
    "text": "異なるリソースグループに展開する"
   },
   {
    "key": "D",
    "text": "２つのネットワークインターフェイスを持たせる"
   }
  ],
  "correctAnswers": [
   "A"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "5.1.1「仮想ネットワークとサブネット」",
  "explanation": "異なる仮想ネットワークに展開されている仮想マシン同士は接続する事はできません。したがって、VM1 を\n他の仮想マシンと接続させたくない場合は、VM1 を他の仮想マシンとは異なる仮想ネットワークに配置します。"
 },
 {
  "id": "q6",
  "number": 6,
  "type": "choice",
  "chapter": 6,
  "chapterName": "ストレージサービス",
  "text": "Standard 汎用 v2 ストレージアカウントを使用しています。このストレージアカウントは保存したデータの量\nに対してのみ課金され、すべての読み取りおよび書き込み操作は無料です。これは正しいですか？",
  "choices": [
   {
    "key": "A",
    "text": "はい、正しいです"
   },
   {
    "key": "B",
    "text": "いいえ、正しくありません"
   }
  ],
  "correctAnswers": [
   "B"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "6.1.2「ストレージアカウントのパフォーマンスと種類」",
  "explanation": "Standard 汎用 v2 ストレージアカウントは、保存したデータ量やデータへのアクセスに対する料金が発生し\nます。"
 },
 {
  "id": "q7",
  "number": 7,
  "type": "truefalse",
  "chapter": 7,
  "chapterName": "ID・アクセス・セキュリティ",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。誤っている場合は「いいえ」を選\n択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Microsoft Entra ID(Azure Active Directory) Premium は、少なくとも 99.9% の可用性が保証されます。",
   "すべての Azure の有料顧客は、月間稼働率がサービスレベルアグリーメント(SLA)で保証されているレベルを下回っている場合、クレジットを請求できます。"
  ],
  "tfAnswers": [
   "はい",
   "はい"
  ],
  "review": "7.1.2「 Azure Active Directory(Microsoft Entra ID)」",
  "explanation": "Microsoft Entra ID(Azure AD)のエディションが P1 または P2 の場合は、SLA が 99.9％保証されます。した\nがって、①の正解は「はい」です。\nまた、Microsoft Entra ID のエディションが P1 または P2 の場合は、月間稼働率が 99.9％を下回った場合\nは、顧客はマイクロソフトにサービスクレジットを請求できます。したがって、②の正解は「はい」です。"
 },
 {
  "id": "q8",
  "number": 8,
  "type": "choice",
  "chapter": 8,
  "chapterName": "ガバナンス・コンプライアンス・監視",
  "text": "あなたの会社には、複数の地域のリソースを含む Azure 環境があります。管理者は、会社のポリシーとして\nオフィスがある国の地域でのみ Azure リソースを作成できるようにする必要があると考えています。この要件\nを満たすためには何を作成する必要がありますか？",
  "choices": [
   {
    "key": "A",
    "text": "読み取り専用ロック"
   },
   {
    "key": "B",
    "text": "Azure Policy"
   },
   {
    "key": "C",
    "text": "予約"
   },
   {
    "key": "D",
    "text": "管理グループ"
   }
  ],
  "correctAnswers": [
   "B"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "8.1.1「 Azure Policy」",
  "explanation": "Azure Policy を使用すると、Azure 環境にさまざまなルールが適用できるため、会社のルールに準拠した運\n用を行うことができます。\nたとえば Azure Policy では、次のようなポリシーを構成できます。\n•作成できる仮想マシンのサイズ制限\n•仮想ネットワークなどの特定のリソースの作成の拒否\n•使用できるリージョンの制限"
 },
 {
  "id": "q9",
  "number": 9,
  "type": "choice",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "問題文中の（）にあてはまるものを選択肢から選んでください。\nクラウドアプリがリソースを割り当てまたは解放できるのは、（）を持っているからです。",
  "choices": [
   {
    "key": "A",
    "text": "弾力性"
   },
   {
    "key": "B",
    "text": "ガバナンス"
   },
   {
    "key": "C",
    "text": "高可用性"
   },
   {
    "key": "D",
    "text": "予測可能性"
   },
   {
    "key": "E",
    "text": "信頼性"
   }
  ],
  "correctAnswers": [
   "A"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "1.1.2「クラウドを利用するメリット」",
  "explanation": "弾力性 (Elasticity)とは、クラウドリソースが需要に基づいて自動的にリソースの割り当てを変更できること\nです。",
  "supplement": "弾力性（Elasticity）は、混雑時に自動でリソースを増やし、空いたら自動で減らす「需要に合わせた伸び縮み」のこと。使った分だけ払うクラウドと相性がよく、ムダなコストを抑えられます。",
  "diagram": "scaling"
 },
 {
  "id": "q10",
  "number": 10,
  "type": "choice",
  "chapter": 2,
  "chapterName": "Azureの基礎・コスト管理",
  "text": "あなたの会社には 10 の部門があります。各部門が、Azure の異なる支払い方法を使用できるようにする必\n要があります。部門ごとに何を作成する必要がありますか?",
  "choices": [
   {
    "key": "A",
    "text": "リソースグループ"
   },
   {
    "key": "B",
    "text": "サブスクリプション"
   },
   {
    "key": "C",
    "text": "予約"
   },
   {
    "key": "D",
    "text": "ロール"
   }
  ],
  "correctAnswers": [
   "B"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "2.2.1「サブスクリプションとは」",
  "explanation": "サブスクリプションには、「契約 / 請求管理側面」と「システム管理側面」があります。１つのサブスクリプショ\nンに対して、部署ごとやプロジェクトごとというように請求を分けたり、異なる支払い方法を使用することは\nできません。異なる支払い要件がある場合、サブスクリプションを分ける必要があります。したがって、正解は\nB です。"
 },
 {
  "id": "q12",
  "number": 12,
  "type": "choice",
  "chapter": 4,
  "chapterName": "コンピューティングサービス",
  "text": "サーバーを必要とせずに Azure でアプリケーションコードを実行できるサービスはどれですか？",
  "choices": [
   {
    "key": "A",
    "text": "Azure Functions"
   },
   {
    "key": "B",
    "text": "仮想マシン"
   },
   {
    "key": "C",
    "text": "仮想マシンスケールセット"
   },
   {
    "key": "D",
    "text": "Azure Kubernetes Service"
   }
  ],
  "correctAnswers": [
   "A"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "4.1.5「 Azure Functions」",
  "explanation": "Azure Functions は、Azure の代表的なサーバーレスコンピューティングサービスです。",
  "supplement": "サーバーレスとは「サーバーの存在を意識しなくてよい」仕組みのこと。Azure Functions はその代表で、きっかけ（イベント）が起きた瞬間だけ動き、動いた分だけ課金されます。常時起動が不要なので、たまにしか動かない処理を安く作れます。",
  "diagram": "service-models"
 },
 {
  "id": "q14",
  "number": 14,
  "type": "truefalse",
  "chapter": 6,
  "chapterName": "ストレージサービス",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。\n誤っている場合は「いいえ」を選択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Premium Storage はファイル共有で使用できます。",
   "Premium Storage はブロック BLOB で使用できます。",
   "Premium Storage は Standard 汎用 v2 で使用できます。"
  ],
  "tfAnswers": [
   "はい",
   "はい",
   "いいえ"
  ],
  "review": "6.1.2「ストレージアカウントのパフォーマンスと種類」",
  "explanation": "ストレージアカウントの Premium のパフォーマンスは、「 Premium ブロック B LOB」「 Premium ファイル共有」\n「 Premium ページ BLOB」の 3 種類から選択できます。"
 },
 {
  "id": "q15",
  "number": 15,
  "type": "choice",
  "chapter": 7,
  "chapterName": "ID・アクセス・セキュリティ",
  "text": "あなたは、Azure サブスクリプションのために新しいユーザーを作成する必要があります。使用するサービス\nはどれですか？",
  "choices": [
   {
    "key": "A",
    "text": "Azure Virtual Machines"
   },
   {
    "key": "B",
    "text": "Cost Management (コスト管理ツール)"
   },
   {
    "key": "C",
    "text": "サブスクリプション"
   },
   {
    "key": "D",
    "text": "Azure Active Directory"
   },
   {
    "key": "E",
    "text": "App Service F.    リソースグループ"
   }
  ],
  "correctAnswers": [
   "D"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "7.1.2「 Azure Active Directory(Microsoft Entra ID)」",
  "explanation": "サブスクリプションは必ず Microsoft Entra テナント(Azure AD)に紐づきます。サブスクリプションの契約時\nに Microsoft Entra テナントが無い場合は、そのタイミングで新しく Microsoft Entra テナントが作成されます。\nサブスクリプションに仮想マシンなどを作成するには、サブスクリプションが関連づいている Microsoft Entra\nテナントにユーザーを作成し、そのユーザーで Azure portal などにサインインする必要があります。したがって\n正解は D になります。"
 },
 {
  "id": "q16",
  "number": 16,
  "type": "truefalse",
  "chapter": 8,
  "chapterName": "ガバナンス・コンプライアンス・監視",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。誤っている場合は「いいえ」を選択\nしてください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Azure Policy を仮想マシンに割り当てることができます。",
   "Azure Policy がリソースグループに割り当てられている場合、準拠していないリソースはグループから削除されます。",
   "Azure Policy がリソースグループに割り当てられている場合、そのグループには準拠したリソースのみをデプロイできます。"
  ],
  "tfAnswers": [
   "はい",
   "いいえ",
   "はい"
  ],
  "review": "8.1.1「 Azure Policy」",
  "explanation": "Azure Policy のポリシー定義やイニシアチブ定義は、管理グループ、サブスクリプション、リソースグループ、\n特定のリソースに割り当てて使用できます。したがって、①の答えは「はい」です。Azure Policy 定義をリソース\nグループに割り当てた後、ポリシーに準拠していないリソースを新規作成することはできません。しかし、ポリ\nシーに準拠していない既存のリソースは正常に機能し続けます。したがって、②の答えは「いいえ」、③の答え\nは「はい」です。"
 },
 {
  "id": "q17",
  "number": 17,
  "type": "choice",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "あなたの会社は、App1 という名前の会計システムを顧客に提供しています。App1 は、月の前半は使用率が低く、\n月の後半は使用率が非常に高くなります。このアプリに必要なコスト削減につながるクラウドサービスの利点はどれですか。",
  "choices": [
   {
    "key": "A",
    "text": "高可用性"
   },
   {
    "key": "B",
    "text": "高遅延"
   },
   {
    "key": "C",
    "text": "弾力性"
   },
   {
    "key": "D",
    "text": "負荷分散"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "1.1.2「クラウドを利用するメリット」",
  "explanation": "多くのクラウドサービスには、動的にリソースの割り当てを変更できる自動スケールの機能があります。これ\nを弾力性といいます。この自動スケール機能により、使用率が高い時は動的に割り当てを追加し、使用率が\n低い時には動的に割り当てを減らすことにより、コストを削減する事ができます。"
 },
 {
  "id": "q18",
  "number": 18,
  "type": "choice",
  "chapter": 2,
  "chapterName": "Azureの基礎・コスト管理",
  "text": "既存のサブスクリプションに、10 台の仮想マシンが構成されています。\nあなたは、新しくサブスクリプションを購入しました。既存のサブスクリプションに存在する仮想マシンを新しい\nサブスクリプションに移動することを計画しています。このときの説明として、最も適切なものは以下のどれで\nすか。",
  "choices": [
   {
    "key": "A",
    "text": "仮想マシンは異なるサブスクリプション間を移動することはできません。"
   },
   {
    "key": "B",
    "text": "同じ名前のリソースグループが存在する場合、サブスクリプション間を移動できます。"
   },
   {
    "key": "C",
    "text": "Windows Server の仮想マシンのみ、サブスクリプション間を移動できます。"
   },
   {
    "key": "D",
    "text": "移動元と移動先のサブスクリプションがアクティブである場合、仮想マシンを移動することができます。"
   }
  ],
  "correctAnswers": [
   "D"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "2.2.1「サブスクリプションとは」",
  "explanation": "仮想マシンなどのリソースは、サブスクリプション間で移動することが可能です。その際、仮想マシンの OS の\n種類やリソースグループの制約などはないため、 D が正解です。"
 },
 {
  "id": "q19",
  "number": 19,
  "type": "truefalse",
  "chapter": 3,
  "chapterName": "Azureの管理ツール・ガバナンス基礎",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。誤っている場合は「いいえ」を選択\nしてください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Azure Cloud Shell を使用する場合、コンピューターに Azure Cloud Shell をインストールする必要があります。",
   "Azure CLI は、既定で Windows 11 にインストールされます。",
   "Azure PowerShell は、Windows、Linux、macO S のコンピューターで使用できます。"
  ],
  "tfAnswers": [
   "いいえ",
   "いいえ",
   "はい"
  ],
  "review": "3.2.2「 Azure PowerShell」、3.2.3「 Azure CLI」、3.2.4「 Azure Cloud Shell」",
  "explanation": "Azure Cloud Shell は、A zure portal や Azure Mobile Apps からアクセスして使用できるため、ローカルコ\nンピューターにインストールする必要はありません。したがって、①の答えは「いいえ」です。Azure CLI は、ユー\nザーが自分でインストールする必要があります。したがって、②の答えは「いいえ」です。Azure PowerShell は、\nWindows、Linux、macO S で使用できます。したがって、③の答えは「はい」です。"
 },
 {
  "id": "q20",
  "number": 20,
  "type": "choice",
  "chapter": 4,
  "chapterName": "コンピューティングサービス",
  "text": "仮想マシンに必要なリソースは何ですか？",
  "choices": [
   {
    "key": "A",
    "text": "仮想ネットワーク"
   },
   {
    "key": "B",
    "text": "サービスエンドポイント"
   },
   {
    "key": "C",
    "text": "Azure ファイアウォール"
   },
   {
    "key": "D",
    "text": "パブリック IP アドレス"
   }
  ],
  "correctAnswers": [
   "A"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "4.1.1「 Azure Virtual Machines (仮想マシン)」、5.1.1「仮想ネットワークとサブネット」",
  "explanation": "仮想マシンは必ず仮想ネットワーク内に作成しなければなりません。仮想ネットワークなしで仮想マシンを作\n成する事はできません。"
 },
 {
  "id": "q21",
  "number": 21,
  "type": "choice",
  "chapter": 6,
  "chapterName": "ストレージサービス",
  "text": "ストレージアカウントを LRS の冗長化オプションで作成します。最低何個のデータのコピーが保持されます\nか？",
  "choices": [
   {
    "key": "A",
    "text": "1つ"
   },
   {
    "key": "B",
    "text": "2つ"
   },
   {
    "key": "C",
    "text": "3つ"
   },
   {
    "key": "D",
    "text": "6つ"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "6.1.3「ストレージアカウントの冗長化オプション」",
  "explanation": "LRS は、リージョン内の 1 つのデータセンター内に 3 つのデータのコピーを保持します。",
  "supplement": "冗長化とは「同じデータのコピーを複数持って守る」こと。LRS（ローカル冗長）は 1 つのデータセンター内に 3 つコピーを置く一番安い方式で、機器の故障には強い一方、その地域全体の災害には弱いです。より広く守る ZRS（ゾーン分散）や GRS（別リージョン）もあります。",
  "diagram": "storage-redundancy"
 },
 {
  "id": "q22",
  "number": 22,
  "type": "truefalse",
  "chapter": 7,
  "chapterName": "ID・アクセス・セキュリティ",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。誤っている場合は「いいえ」を選択\nしてください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Azure リソースにアクセスするための認可は、Azure AD ユーザーのみに行われます。",
   "Azure Active Directory、サードパーティのクラウドサービス、オンプレミスの Active Directory に保存されている ID を使用して、Azure リソースにアクセスできます。",
   "Azure には、Azure リソースへの安全なアクセスを提供する組み込みの認証および承認サービスがあります。"
  ],
  "tfAnswers": [
   "いいえ",
   "はい",
   "はい"
  ],
  "review": "7.1.2「 Azure Active Directory(Microsoft Entra ID)」",
  "explanation": "Azure リソースにアクセスするための認可 (承認 ) は、Microsoft Entra(Azure AD)ユーザーだけではなく、\nゲストユーザーにもできます。ゲストユーザーとは、異なる Microsoft Entra テナント (Azure AD テナント)のユ\nーザーや Microsoft アカウント、Google アカウントなどに招待状を送って登録するユーザーです。したがって、\n①の正解は「いいえ」です。\nまた、Microsoft Entra ID のユーザーだけでなく、外部のユーザーをゲストユーザーとして登録する事で、サ\nードパーティのクラウドシステムのユーザーも Azure のリソースにアクセスさせることができます。またオンプレ\nミスの Active Directory Domain Services のユーザーは、ディレクトリ同期を構成して Microsoft Entra ID に\n\fユーザーを登録する事により、Azure のリソースにアクセスを許可する事ができます。したがって、②の正解は\n「はい」です。\nそして、Azure の組み込みの認証、認可のサービスは Microsoft Entra ID です。したがって、③の正解は「は\nい」です。"
 },
 {
  "id": "q23",
  "number": 23,
  "type": "choice",
  "chapter": 8,
  "chapterName": "ガバナンス・コンプライアンス・監視",
  "text": "Azure リソースには、複数の削除ロックを設定できます。これは正しいですか？",
  "choices": [
   {
    "key": "A",
    "text": "はい、正しいです"
   },
   {
    "key": "B",
    "text": "いいえ、正しくありません"
   }
  ],
  "correctAnswers": [
   "A"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "8.1.2「リソースロック」",
  "explanation": "Azure リソースには、複数のロックを構成できます。読み取り専用ロックが構成されているリソースに、読み\n取り専用ロックや削除ロックを追加できます。また、削除ロックが構成されている場合も同様です。"
 },
 {
  "id": "q24",
  "number": 24,
  "type": "choice",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "問題文中の（）にあてはまるものを選択肢から選んでください。\n（）は、サービスの障害時でもクラウドサービスへのアクセスを保証します。",
  "choices": [
   {
    "key": "A",
    "text": "高可用性"
   },
   {
    "key": "B",
    "text": "予測可能性"
   },
   {
    "key": "C",
    "text": "信頼性"
   },
   {
    "key": "D",
    "text": "スケーラビリティ"
   }
  ],
  "correctAnswers": [
   "A"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "1.1.2「クラウドを利用するメリット」",
  "explanation": "高可用性とは、システムが停止する頻度や時間が極力少ないことを指します。",
  "supplement": "高可用性（High Availability）とは「めったに止まらない」状態のこと。Azure では 1 つのリージョン内に、電源も建物も別々の“可用性ゾーン”が複数あります。サーバーをゾーンに分散しておけば、片方が壊れてももう片方で動き続けられます。",
  "diagram": "availability-zones"
 },
 {
  "id": "q25",
  "number": 25,
  "type": "truefalse",
  "chapter": 0,
  "chapterName": "その他",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。誤っている場合は「いいえ」を選\n択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "1 つのリソースグループにデプロイされる Azure リソースは、同じリージョンである必要があります。",
   "リソースグループにタグを割り当てると、リソースグループ内のすべてのリソースに同じタグが設定されます。",
   "リソースグループに管理権限を設定すると、リソースグループ内のすべてのリソースに管理権限が継承されます。"
  ],
  "tfAnswers": [
   "いいえ",
   "いいえ",
   "はい"
  ],
  "review": "",
  "explanation": "復習 2.3.1「リソースとリソースグループ」、7.1.6「 Azure のアクセス管理」\n1 つのリソースグループに、異なる種類のリソースや、異なるリージョンのリソースを混在させることが可能\nです。したがって、①の正解は「いいえ」です。\nまた、タグの内容は既定では継承されません。したがって、リソースグループにタグを設定しても、リソースグ\nループ内のリソースにはタグは設定されません。②の正解は「いいえ」です。\nそして、管理権限の設定 (RBAC)は、下位のリソースに継承されます。リソースグループにロールを割り当て\nると、リソースグループ内のすべてのリソースの管理ができるようになります。したがって、③の正解は「はい」\nです。"
 },
 {
  "id": "q26",
  "number": 26,
  "type": "choice",
  "chapter": 3,
  "chapterName": "Azureの管理ツール・ガバナンス基礎",
  "text": "管理者は、Azure リソースを作成する PowerShell スクリプトを実行したいと考えています。Azure リソース\nを作成するための PowerShell スクリプトを実行できるコンピューターはどれですか？",
  "choices": [
   {
    "key": "A",
    "text": "PowerShell と Azure PowerShell がインストールされている macO S のコンピューター"
   },
   {
    "key": "B",
    "text": "Azure CLI がインストールされている Linux OS のコンピューター"
   }
  ],
  "correctAnswers": [
   "A"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "3.2.2「 Azure PowerShell」",
  "explanation": "Azure を操作するための PowerShell スクリプトを実行するには、Azure PowerShell が必要です。"
 },
 {
  "id": "q28",
  "number": 28,
  "type": "choice",
  "chapter": 5,
  "chapterName": "ネットワークサービス",
  "text": "複数の Azure 仮想マシンを含む Azure 環境があります。オンプレミスネットワーク上のクライアントコンピューターが\nAzure 仮想マシンと通信できるようにするソリューションを実装する予定です。\n計画されたソリューションのために作成する必要がある Azure リソースはどれですか?正しい答えを２つ選択してください。",
  "choices": [
   {
    "key": "A",
    "text": "仮想ネットワークゲートウェイ"
   },
   {
    "key": "B",
    "text": "ロードバランサー"
   },
   {
    "key": "C",
    "text": "アプリケーションゲートウェイ"
   },
   {
    "key": "D",
    "text": "仮想ネットワーク"
   },
   {
    "key": "E",
    "text": "ゲートウェイサブネット"
   }
  ],
  "correctAnswers": [
   "A",
   "E"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "5.1.4「オンプレミスネットワークとの接続」",
  "explanation": "オンプレミスの PC を Azure の仮想ネットワークに接続するには、サイト間 VPN を使用できます。サイト間 V PN を構\n成するには、Azure の仮想ネットワークに「 GatewaySubnet」というサブネットを作成し、そのサブネットに VPN ゲートウ\nェイを作成します。"
 },
 {
  "id": "q29",
  "number": 29,
  "type": "choice",
  "chapter": 6,
  "chapterName": "ストレージサービス",
  "text": "ストレージアカウントにコピーされたすべてのデータは、別のリージョンの Azure データセンターに自動的に\nバックアップされます。これは正しいですか？",
  "choices": [
   {
    "key": "A",
    "text": "はい、正しいです"
   },
   {
    "key": "B",
    "text": "いいえ、正しくありません"
   }
  ],
  "correctAnswers": [
   "B"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "6.1.3「ストレージアカウントの冗長化オプション」",
  "explanation": "別のリージョンにデータのバックアップ（レプリカ）を保持するには、GRS または GZRS 以上の冗長化オプシ\nョンを選択する必要があります。"
 },
 {
  "id": "q30",
  "number": 30,
  "type": "truefalse",
  "chapter": 7,
  "chapterName": "ID・アクセス・セキュリティ",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。誤っている場合は「いいえ」を選\n択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Azure Active Directory(Azure AD)は、オンプレミスアプリケーションへのアクセスを管理するために使用する事ができます。",
   "Azure Active Directory(Azure AD)は、シングルサインオン(SSO)を提供します。",
   "iOS デバイスは、Azure Active Directory(Azure AD)に登録する事ができます。"
  ],
  "tfAnswers": [
   "はい",
   "はい",
   "はい"
  ],
  "review": "7.1.2「 Azure Active Directory(Microsoft Entra ID)」",
  "explanation": "Microsoft Entra ID(Azure Active Directory) には、Web アプリケーションプロキシというサービスがあり、\nオンプレミスの Web アプリは Microsoft Entra ID 経由でアクセスさせることができます。一般的に、インターネ\nット経由でオンプレミスの Web アプリにアクセスさせるには、ファイアウォールなどでインターネットからの接続\nを許可する必要がありますが、Microsoft Entra ID の Web アプリケーションプロキシを使用すると、ファイアウ\nォールなどへの追加の設定は不要です。したがって、①の正解は「はい」です。\nまた、Microsoft Entra ID による認証が行われると、同じ Microsoft Entra ID を使用するクラウドアプリへ\nのアクセスにはシングルサインオン(SSO)が働き、何度も同じユーザー名とパスワードを入力しなくてもアクセス\nができます。したがって、②の正解は「はい」です。\nそして、Microsoft Entra ID はユーザーアカウントだけではなく、ユーザーが使用するデバイスも登録できま\nす。登録できるデバイスは、Windows のデバイスだけでなく、Linux や MacOS、そして iOS や Android 端末も\n対象となります。したがって、③の正解は「はい」です。"
 },
 {
  "id": "q31",
  "number": 31,
  "type": "truefalse",
  "chapter": 8,
  "chapterName": "ガバナンス・コンプライアンス・監視",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。誤っている場合は「いいえ」を選択\nしてください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "ARM テンプレートを Azure Blueprints に追加できます。",
   "Azure Blueprints を使用して、リソースにアクセス許可を付与できます。"
  ],
  "tfAnswers": [
   "はい",
   "はい"
  ],
  "review": "8.1.3「 Azure Blueprints（ブループリント）」",
  "explanation": "Azure Blueprints を使用して、リソースグループ、ARM テンプレート、ロールの割り当て（アクセス許可）、\nAzure Policy を定義できます。定義済みの Azure Blueprints を実行すると、リソースの構成とロールの割り\n当てを含む完全な Azure 環境を作成できます。"
 },
 {
  "id": "q33",
  "number": 33,
  "type": "choice",
  "chapter": 2,
  "chapterName": "Azureの基礎・コスト管理",
  "text": "次の文章の（）にあてはまる文章を選択肢から選択してください。\nあなたの Azure の無料アカウントが先週有効期限切れとなりました。あなたは、現在（）することができません。",
  "choices": [
   {
    "key": "A",
    "text": "追加の Azure AD アカウントを作成"
   },
   {
    "key": "B",
    "text": "既存の Azure 仮想マシンを起動"
   },
   {
    "key": "C",
    "text": "Azure に保存されているデータにアクセス"
   },
   {
    "key": "D",
    "text": "Azure portal にアクセス"
   }
  ],
  "correctAnswers": [
   "B"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "2.2.2「サブスクリプションの種類」",
  "explanation": "Azure の無料アカウントが有効期限切れになると、新規でリソースが作れなくなったり、既存の仮想マシンリソースなど\nを起動することができなくなります。したがって、正解は B です。"
 },
 {
  "id": "q34",
  "number": 34,
  "type": "choice",
  "chapter": 3,
  "chapterName": "Azureの管理ツール・ガバナンス基礎",
  "text": "Azure App Service があります。iPhone から App Service の設定を管理したいと考えています。使用でき\nる管理ツールはどれですか？ 2 つ選択してください。",
  "choices": [
   {
    "key": "A",
    "text": "Azure CLI"
   },
   {
    "key": "B",
    "text": "Azure portal"
   },
   {
    "key": "C",
    "text": "Azure Cloud Shell"
   },
   {
    "key": "D",
    "text": "Windows PowerShell"
   },
   {
    "key": "E",
    "text": "Azure Storage Explorer"
   }
  ],
  "correctAnswers": [
   "B",
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "3.2.5「 Azure Mobile Apps（モバイルアプリ）」",
  "explanation": "iOS のデバイスを使用して Azure リソースを管理するには、Azure Mobile Apps を使用して Cloud Shell を\n起動するか、Safari などのブラウザーを使用して Azure portal にアクセスします。"
 },
 {
  "id": "q35",
  "number": 35,
  "type": "choice",
  "chapter": 4,
  "chapterName": "コンピューティングサービス",
  "text": "次のステートメントの（）にあてはまる文章を選択肢から選択してください。\n（）はサーバーを必要とせず、Azure でアプリケーションコードを実行します。",
  "choices": [
   {
    "key": "A",
    "text": "Azure DevOps パイプライン"
   },
   {
    "key": "B",
    "text": "Azure Resource Manager(ARM) テンプレート"
   },
   {
    "key": "C",
    "text": "Azure アプリケーションゲートウェイ"
   },
   {
    "key": "D",
    "text": "Azure Functions"
   }
  ],
  "correctAnswers": [
   "D"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "4.1.5「 Azure Functions」",
  "explanation": "Azure Functions は、Azure の代表的なサーバーレスコンピューティングサービスです。",
  "supplement": "Azure Functions は“サーバーレス”の代表格です。サーバーの用意や管理は不要で、イベントが起きた瞬間だけコードが動き、実行した時間の分だけ課金されます。",
  "diagram": "service-models"
 },
 {
  "id": "q36",
  "number": 36,
  "type": "choice",
  "chapter": 5,
  "chapterName": "ネットワークサービス",
  "text": "会社のネットワークを Azure に拡張する予定です。会社のネットワークには、 131.107.700.1 の IP アドレスを\n使用する VPN アプライアンスが含まれています。\nAzure で VPN アプライアンスを定義する Azure リソースを作成する必要があります。\nどの Azure リソースを作成する必要がありますか?",
  "choices": [
   {
    "key": "A",
    "text": "アプリケーションゲートウェイ"
   },
   {
    "key": "B",
    "text": "VPN ゲートウェイ"
   },
   {
    "key": "C",
    "text": "Azure ファイアウォール"
   },
   {
    "key": "D",
    "text": "ネットワークセキュリティグループ"
   },
   {
    "key": "E",
    "text": "ローカルネットワークゲートウェイ"
   }
  ],
  "correctAnswers": [
   "E"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "5.1.4「オンプレミスネットワークとの接続」",
  "explanation": "オンプレミスと Azure の仮想ネットワークを接続するには、サイト間 VPN を構成します。サイト間 VPN を構\n成するには、Azure の仮想ネットワークに「 GatewaySubnet」サブネットを作成し、そのサブネットに VPN ゲート\nウェイを作成します。更に、オンプレミス側の VPN アプライアンス(VPN デバイス)を指すローカルネットワークゲ\nートウェイを作成する必要があります。ローカルネットワークゲートウェイには、オンプレミスのアドレス空間と接\n続先となる VPN デバイスの IP アドレスなどを指定します。"
 },
 {
  "id": "q37",
  "number": 37,
  "type": "choice",
  "chapter": 6,
  "chapterName": "ストレージサービス",
  "text": "ストレージアカウントのホットアクセス層は、Standard 汎用 v2 を使用する Azure BLOB で使用できます。こ\nれは正しいですか？",
  "choices": [
   {
    "key": "A",
    "text": "はい、正しいです"
   },
   {
    "key": "B",
    "text": "いいえ、正しくありません"
   }
  ],
  "correctAnswers": [
   "A"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "6.1.5「 BLOB のアクセス層」",
  "explanation": "アクセス層を使用するのは、Standard 汎用 v2 の Azure BLOB のみです。",
  "supplement": "アクセス層は「どれくらいの頻度で使うデータか」で選ぶ保存モードです。ホット＝よく使う、クール＝たまに、アーカイブ＝めったに使わない。使用頻度が低い層ほど保存料は安く、取り出しは遅く・割高になります。対象は Standard 汎用 v2 の Blob です。",
  "diagram": "storage-tiers"
 },
 {
  "id": "q39",
  "number": 39,
  "type": "choice",
  "chapter": 8,
  "chapterName": "ガバナンス・コンプライアンス・監視",
  "text": "Service Trust Portal には、マイクロソフトクラウドサービスアカウントを使用してアクセスできます。これは正\nしいですか？",
  "choices": [
   {
    "key": "A",
    "text": "はい、正しいです"
   },
   {
    "key": "B",
    "text": "いいえ、正しくありません"
   }
  ],
  "correctAnswers": [
   "A"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "8.1.4「 Service Trust Portal とトラストセンター」",
  "explanation": "Service Trust Portal のコンプライアンス資料には、マイクロソフトクラウドサービスアカウント（ Azure Active\nDirectory 組織アカウント： Microsoft Entra アカウント）を使用してアクセスできます"
 },
 {
  "id": "q40",
  "number": 40,
  "type": "choice",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "複数のサーバーをオンプレミスネットワークから Azure に移行する予定です。\nパブリッククラウドサービスを使用する主な利点は何ですか。",
  "choices": [
   {
    "key": "A",
    "text": "パブリッククラウドは、民間企業ではなく、公的な機関によって所有されています。"
   },
   {
    "key": "B",
    "text": "すべてのパブリッククラウドリソースは、すべての利用者が自由にアクセスできます。"
   },
   {
    "key": "C",
    "text": "パブリッククラウドは、クラウドを強化する機能を企業に提供するクラウドの利用形態です。"
   },
   {
    "key": "D",
    "text": "パブリッククラウドは、複数の企業がクラウド内のリソース(ハードウェア)を共有します。"
   }
  ],
  "correctAnswers": [
   "D"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "1.1.3「クラウドモデルとは」",
  "explanation": "パブリッククラウドは、クラウドサービスプロバイダーが提供するハードウェアを利用する形態で、一般的に\n複数の組織がリソース(ハードウェア)を共有することで安価に利用する事ができます。"
 },
 {
  "id": "q41",
  "number": 41,
  "type": "truefalse",
  "chapter": 2,
  "chapterName": "Azureの基礎・コスト管理",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。誤っている場合は「いいえ」を選\n択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "組織のユーザーが Azure の無料アカウントを使用している場合、Azure の仮想マシンとストレージアカウントのみを作成できます。",
   "Azure の無料アカウントは、特定の期間が過ぎると有効期限が切れます。",
   "同じマイクロソフトアカウントを使用して 10 個まで Azure の無料アカウントを作成することができます。"
  ],
  "tfAnswers": [
   "いいえ",
   "はい",
   "いいえ"
  ],
  "review": "2.2.2「サブスクリプションの種類」",
  "explanation": "Azure の無料アカウントは、1 か月間または 200 ドル分のクレジットを使い切るまでさまざまなリソースを作\n成する事ができます。したがって、①の正解は「いいえ」です。\nまた、Azure の無料アカウントは、1 か月過ぎると有効期限切れとなり、無効状態になります。したがって②\nの正解は「はい」です。\nそして、１つのマイクロソフトアカウントで作成できる Azure の無料アカウントは１つです。したがって、③の正\n解は「いいえ」です。"
 },
 {
  "id": "q42",
  "number": 42,
  "type": "choice",
  "chapter": 3,
  "chapterName": "Azureの管理ツール・ガバナンス基礎",
  "text": "Azure 環境で、一貫性のあるインフラストラクチャーリソースを作成するために使用するものはどれです\nか？",
  "choices": [
   {
    "key": "A",
    "text": "リソースグループ"
   },
   {
    "key": "B",
    "text": "Azure Resource Manager テンプレート"
   },
   {
    "key": "C",
    "text": "管理グループ"
   }
  ],
  "correctAnswers": [
   "B"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "3.3.1「 ARM テンプレート」",
  "explanation": "ARM テンプレートは、Azure 環境で一貫性のあるインフラストラクチャーリソースを作成するために使用で\nきます。"
 },
 {
  "id": "q44",
  "number": 44,
  "type": "choice",
  "chapter": 6,
  "chapterName": "ストレージサービス",
  "text": "BLOB が Azure BLOB にアップロードされた後で、ストレージアカウントのアクセスレベルを変更できます。こ\nれは正しいですか？",
  "choices": [
   {
    "key": "A",
    "text": "はい、正しいです"
   },
   {
    "key": "B",
    "text": "いいえ、正しくありません"
   }
  ],
  "correctAnswers": [
   "A"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "6.1.5「 BLOB のアクセス層」",
  "explanation": "ストレージアカウントレベルで設定したアクセス層は、後から変更できます。",
  "supplement": "アクセス層（ホット／クール／アーカイブ）は、保存したあとからでも切り替えられます。使わなくなったデータをクールやアーカイブに移せば、保存コストを後から下げられます。",
  "diagram": "storage-tiers"
 },
 {
  "id": "q45",
  "number": 45,
  "type": "truefalse",
  "chapter": 7,
  "chapterName": "ID・アクセス・セキュリティ",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。誤っている場合は「いいえ」を選択\nしてください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Microsoft Entra Multi-Factor Authentication(MFA)ソリューションを実装するために、オンプレミスの ID をクラウドに同期しなければなりません。",
   "Microsoft Entra Multi-Factor Authentication(M FA)の有効な方法は、写真付きの ID とパスポート番号の 2 つで (ア) す。",
   "Microsoft Entra Multi-Factor Authentication(MFA)は、管理者アカウントと非管理者アカウントに要求する事ができます。"
  ],
  "tfAnswers": [
   "いいえ",
   "いいえ",
   "はい"
  ],
  "review": "7.1.5「 Azure Active Directory(Microsoft Entra ID)のライセンスと主な機能」",
  "explanation": "Microsoft Entra MFA(Azure AD MFA)を実装するために、オンプレミスの ID をクラウドに同期する必要は\nありません。したがって①の正解は「いいえ」です。\nまた、Microsoft Entra MFA の 2 要素目として、スマートフォンや携帯電話などを利用する事ができます。し\nたがって②の正解は「いいえ」です。\nそして、Microsoft Entra MFA は、管理者アカウントだけでなく非管理者アカウントにも有効にできます。し\nたがって③の正解は「はい」です。"
 },
 {
  "id": "q46",
  "number": 46,
  "type": "choice",
  "chapter": 8,
  "chapterName": "ガバナンス・コンプライアンス・監視",
  "text": "次の文章の（）にあてはまる管理ツール名を下の選択肢から選択してください。\n（）から、Azure サービスの監査レポートとコンプライアンス関連情報を確認できます。",
  "choices": [
   {
    "key": "A",
    "text": "Microsoft Defender for Cloud"
   },
   {
    "key": "B",
    "text": "Microsoft Defender for Identity 管理センター"
   },
   {
    "key": "C",
    "text": "Microsoft 365 コンプライアンスセンター"
   },
   {
    "key": "D",
    "text": "Microsoft Service Trust Portal"
   }
  ],
  "correctAnswers": [
   "D"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "8.1.4「 Service Trust Portal とトラストセンター」",
  "explanation": "Service Trust Portal は、マイクロソフトのクラウドサービスが取得した国際規格の認定（ ISO や PCI など）に\nついての監査レポートやホワイトペーパーなどの、コンプライアンスに関連する情報を公開している Web サイト\nです。"
 },
 {
  "id": "q47",
  "number": 47,
  "type": "truefalse",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。誤っている場合は「いいえ」を選\n択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "ハイブリッドクラウドモデルを利用するには、企業はプライベートクラウドモデルから移行しなければなりません。",
   "企業はパブリッククラウドを利用することにより、社内ネットワークをクラウドに拡張できます。",
   "パブリッククラウドモデルでは、企業のゲストユーザーのみがクラウドのリソースにアクセスできます。"
  ],
  "tfAnswers": [
   "いいえ",
   "はい",
   "いいえ"
  ],
  "review": "復習： 1.1.3「クラウドモデルとは」",
  "explanation": "ハイブリッドクラウドモデルは、パブリッククラウドとプライベートクラウドを両方利用するモデルです。そのた\nめ、プライベートクラウドモデルを無くす必要はありません。したがって、①の正解は「いいえ」です。\nまた、パブリッククラウドを利用し、オンプレミスのネットワークと接続する事により社内ネットワークをクラ\nウドに拡張できます。この構成により、オンプレミスのドメインコントローラーをクラウド側にも配置することが\nできます。したがって、②の正解は「はい」です。\nそして、パブリッククラウドモデルでは、許可されているすべてのユーザーがインターネット経由でアクセスで\nきます。したがって、③の正解は「いいえ」です。"
 },
 {
  "id": "q48",
  "number": 48,
  "type": "truefalse",
  "chapter": 2,
  "chapterName": "Azureの基礎・コスト管理",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。誤っている場合は「いいえ」を選択\nしてください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Azure サブスクリプションは、複数の Microsoft Entra テナントに関連付けることができます。",
   "Microsoft Entra テナントを他の Azure サブスクリプションに関連付けることができます。",
   "Azure のサブスクリプションが無効化された場合、関連づいている Micro soft Entra テナントは自動的に削除されます。"
  ],
  "tfAnswers": [
   "いいえ",
   "はい",
   "いいえ"
  ],
  "review": "2.2.2「サブスクリプションの種類」",
  "explanation": "Azure サブスクリプションと Microsoft Entra ID(Azure AD)の関係は、1 対 1 または多対 1 になります。\nAzure サブスクリプションを複数の Microsoft Entra テナントに関連付けることはできません。したがって、①\nの正解は「いいえ」です。\nまた、Microsoft Entra テナントを他のサブスクリプションに関連付けることができます。他のサブスクリプシ\nョンに関連付けの変更を行うと、自動的に元のテナントからは関連付けが削除されます。したがって、②の正\n解は「はい」です。\nそして、Azure のサブスクリプションが無効化されても、関連づいている Microsoft Entra テナントは自動的\nに削除されることはありません。したがって、③の答えは「いいえ」です。"
 },
 {
  "id": "q49",
  "number": 49,
  "type": "choice",
  "chapter": 3,
  "chapterName": "Azureの管理ツール・ガバナンス基礎",
  "text": "あなたの会社にはいくつかの部署があります。すべての部署には同じ種類の Azure リソースが必要で、それ\nらのリソースの作成を自動化したいと考えています。リソースの作成を自動化するソリューションはどれです\nか？",
  "choices": [
   {
    "key": "A",
    "text": "Azure Resource Manager テンプレート"
   },
   {
    "key": "B",
    "text": "Azure Virtual Machine Scale Sets (仮想マシンスケールセット)"
   },
   {
    "key": "C",
    "text": "Azure API Management"
   },
   {
    "key": "D",
    "text": "管理グループ"
   }
  ],
  "correctAnswers": [
   "A"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "3.3.1「 ARM テンプレート」",
  "explanation": "ARM テンプレートは、複数の Azure リソースの作成および構成を自動化することができます。"
 },
 {
  "id": "q50",
  "number": 50,
  "type": "truefalse",
  "chapter": 5,
  "chapterName": "ネットワークサービス",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。誤っている場合は「いいえ」を選\n択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Azure ExpressRoute 接続を使用する際、オンプレミスネットワークから A zure への受信データは常に無料です。",
   "Azure からオンプレミスネットワークへの送信データトラフィックは、常に無料です。",
   "同じリージョン内の Azure サービス間のデータ通信は常に無料です。"
  ],
  "tfAnswers": [
   "はい",
   "いいえ",
   "はい"
  ],
  "review": "5.1.4「オンプレミスネットワークとの接続」",
  "explanation": "ExpressRoute に限らず、Azure への受信トラフィックは無料です。したがって、①の正解は「はい」です。\nまた、Azure からインターネットへの送信トラフィックは課金の対象です。したがって、②の正解は「いいえ」\nです。\nそして、同じリージョン内の Azure サービス間のデータ通信は基本的に無料です。したがって、③の正解は「は\nい」です。ただし、仮想ネットワークピアリングの場合は同じリージョン内であったとしても、受信送信ともにデ\nータ転送料が発生します。"
 },
 {
  "id": "q51",
  "number": 51,
  "type": "choice",
  "chapter": 6,
  "chapterName": "ストレージサービス",
  "text": "ストレージアカウントのホットアクセス層は、頻繁にアクセスおよび変更されるデータに推奨されます。これは\n正しいですか？",
  "choices": [
   {
    "key": "A",
    "text": "はい、正しいです"
   },
   {
    "key": "B",
    "text": "いいえ、正しくありません"
   }
  ],
  "correctAnswers": [
   "A"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "6.1.5「 BLOB のアクセス層」",
  "explanation": "ホットアクセス層はアクセスコストが最も安いため、アプリケーションなどから頻繁に読み取りや書き込みを\n行うデータの保存に最適です。"
 },
 {
  "id": "q52",
  "number": 52,
  "type": "choice",
  "chapter": 7,
  "chapterName": "ID・アクセス・セキュリティ",
  "text": "Microsoft Entra ユーザーが匿名 IP アドレスを使用してインターネットから Microsof t Entra ID に接続する場合、\nユーザーはパスワードを変更するように自動的に求められるようにする必要があります。どの Azure サービスを使用する必\n要がありますか?",
  "choices": [
   {
    "key": "A",
    "text": "Microsoft Entra Connect Health"
   },
   {
    "key": "B",
    "text": "Microsoft Entra Privileged Identity Management (PIM)"
   },
   {
    "key": "C",
    "text": "Microsoft Defender for Identity"
   },
   {
    "key": "D",
    "text": "Microsoft Entra ID Protection"
   }
  ],
  "correctAnswers": [
   "D"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "7.1.5「 Azure Active Directory(Microsoft Entra ID)のライセンスと主な機能」",
  "explanation": "Microsoft Entra ID Protection(Azure AD Identity Protection) サービスは、ユーザーID やサインイン動作の\nリスクを AI などで検出するサービスです。"
 },
 {
  "id": "q53",
  "number": 53,
  "type": "choice",
  "chapter": 8,
  "chapterName": "ガバナンス・コンプライアンス・監視",
  "text": "Microsoft クラウド製品全体のセキュリティ、プライバシー、コンプライアンスの提供、ポリシー、および機能\nに関する詳細な情報を提供するサービスはどれですか？",
  "choices": [
   {
    "key": "A",
    "text": "Microsoft Purview コンプライアンスポータル"
   },
   {
    "key": "B",
    "text": "Microsoft 365 Defender ポータル"
   },
   {
    "key": "C",
    "text": "Azure portal の Microsoft Defender for Cloud"
   },
   {
    "key": "D",
    "text": "トラストセンター"
   }
  ],
  "correctAnswers": [
   "D"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "8.1.4「 Service Trust Portal とトラストセンター」",
  "explanation": "トラストセンターは、マイクロソフトのクラウドサービス全体のセキュリティ、プライバシー、コンプライアンス、\n機能に関する詳細情報を公開している Web サイトです。マイクロソフトのコンプライアンスに関する動画や、ク\nラウドサービスが収集した個人情報などのデータをどのように保護および管理しているかという詳細情報、\n取得したコンプライアンス認証とそれに関するドキュメントやブログなどの公開を行っています。"
 },
 {
  "id": "q54",
  "number": 54,
  "type": "choice",
  "chapter": 2,
  "chapterName": "Azureの基礎・コスト管理",
  "text": "次のステートメントの続きの文章として正しいものを選択肢から選択してください。\nサブスクリプションに複数の仮想マシンがあります。あなたは新しいサブスクリプションを購入しました。",
  "choices": [
   {
    "key": "A",
    "text": "仮想マシンは新しいサブスクリプションに移動する事はできません。"
   },
   {
    "key": "B",
    "text": "仮想マシンは新しいサブスクリプションに移動する事ができます。"
   },
   {
    "key": "C",
    "text": "仮想マシンは同じリソースグループに存在する時のみ、新しいサブスクリプションに移動する事ができます。"
   },
   {
    "key": "D",
    "text": "仮想マシンは Windows Server 2016 が稼働している場合のみ新しいサブスクリプションに移動することがでます。"
   }
  ],
  "correctAnswers": [
   "B"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "2.2.1「サブスクリプションとは」、2.3.1「リソースとリソースグループ」",
  "explanation": "仮想マシンなどのリソースは、サブスクリプション間、リソースグループ間、リージョン間で移動する事ができ\nます。したがって、仮想マシンは新しいサブスクリプションに移動する事ができるという B が正解です。"
 },
 {
  "id": "q55",
  "number": 55,
  "type": "choice",
  "chapter": 2,
  "chapterName": "Azureの基礎・コスト管理",
  "text": "Azure サブスクリプションに複数の仮想マシンがあります。新しいサブスクリプションを作成します。仮想マシンを新しいサ\nブスクリプションに移動できません。\n手順 : 下線付きの文章を確認してください。ステートメントが正しい場合は、[ 変更は必要ありません ] を選択します。\nステートメントが間違っている場合は、正しい文章を選択肢から選択してください。",
  "choices": [
   {
    "key": "A",
    "text": "変更は必要ありません。"
   },
   {
    "key": "B",
    "text": "仮想マシンを新しいサブスクリプションに移動できます。"
   },
   {
    "key": "C",
    "text": "仮想マシンは、それらがすべて同じリソースグループにある場合にのみ、新しいサブスクリプションに移動できます。"
   },
   {
    "key": "D",
    "text": "Windows Server 2016 を実行している場合にのみ、仮想マシンを新しいサブスクリプションに移動できます。"
   }
  ],
  "correctAnswers": [
   "B"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "2.2.1「サブスクリプションとは」、2.3.1「リソースとリソースグループ」",
  "explanation": "仮想マシンなどのリソースは、サブスクリプション間、リソースグループ間、リージョン間で移動する事ができま\nす。したがって、仮想マシンは新しいサブスクリプションに移動する事ができるという B が正解です。"
 },
 {
  "id": "q56",
  "number": 56,
  "type": "choice",
  "chapter": 2,
  "chapterName": "Azureの基礎・コスト管理",
  "text": "次のステートメントの（）にあてはまる文章を選択肢から選択してください。\nAzure SLA は、Microsoft と顧客の間の正式な契約であり、（）を定義します。",
  "choices": [
   {
    "key": "A",
    "text": "テクノロジーロードマップに基づいて機能を提供するというコミットメント"
   },
   {
    "key": "B",
    "text": "パフォーマンス基準のコミットメント"
   },
   {
    "key": "C",
    "text": "利用可能なインフラストラクチャーの最大スケーラビリティ制限"
   },
   {
    "key": "D",
    "text": "利用可能なインフラストラクチャーの最小のスケーラビリティ制限"
   }
  ],
  "correctAnswers": [
   "B"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "「 2.2.4 サービスレベルアグリーメント(SLA)」",
  "explanation": "Microsoft Azure では、提供されるクラウドサービスのサービス水準を明確にするために、サービスレベルア\nグリーメント(SLA)が定められています。SLA とは、クラウドサービスプロバイダーと利用者との間で結ばれるサ\nービスレベルに関する合意事項のことです。"
 },
 {
  "id": "q57",
  "number": 57,
  "type": "choice",
  "chapter": 2,
  "chapterName": "Azureの基礎・コスト管理",
  "text": "パブリックプレビューの Azure サービスには、どのサービスレベルアグリーメント(SLA)が提供されますか？",
  "choices": [
   {
    "key": "A",
    "text": "SLA はありません。"
   },
   {
    "key": "B",
    "text": "SLA は 99%になります。"
   },
   {
    "key": "C",
    "text": "SLA は一般提供 (GA)の SLA よりも 1%低くなります。"
   },
   {
    "key": "D",
    "text": "SLA は、99.95%になります。"
   }
  ],
  "correctAnswers": [
   "A"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "2.2.4「サービスレベルアグリーメント(SLA)」",
  "explanation": "正式リリース(一般提供： GA)前の「プレビュー」と呼ばれる期間中は SLA の対象外となっています。"
 },
 {
  "id": "q58",
  "number": 58,
  "type": "truefalse",
  "chapter": 3,
  "chapterName": "Azureの管理ツール・ガバナンス基礎",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。誤っている場合は「いいえ」を選択\nしてください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Azure portal を使用して、ARM テンプレートからリソースを作成できる",
   "ARM テンプレートは、コードを使用してインフラストラクチャーを定義できる",
   "作成する Azure リソースごとに、個別の ARM テンプレートが必要である"
  ],
  "tfAnswers": [
   "はい",
   "はい",
   "いいえ"
  ],
  "review": "3.3.1「 ARM テンプレート」",
  "explanation": "ARM テンプレートは JSON 形式のコードを使用してインフラストラクチャーを定義し、Azure portal、Azure\nPowerShell、Azure CLI を使用して、リソースを作成および構成できます。A RM テンプレートは、作成するリソ\nースごとに新しく用意する必要はなく、1 つのテンプレートを汎用的に使用することができます。"
 },
 {
  "id": "q59",
  "number": 59,
  "type": "choice",
  "chapter": 5,
  "chapterName": "ネットワークサービス",
  "text": "この質問では、下線の付いたテキストを評価して、それが正しいかどうかを判断する必要があります。\n仮想マシンを作成したら、ネットワークセキュリティグループ (NSG)を変更して、TCP ポート 8080 からの接続を許可\nする必要があります。\n手順 :下線付きのテキストを確認してください。ステートメントが正しい場合は、[変更は必要ありません]を選択します。ス\nテートメントが間違っている場合は、正しい文章を選択肢から選択してください。",
  "choices": [
   {
    "key": "A",
    "text": "変更は必要ありません"
   },
   {
    "key": "B",
    "text": "仮想ネットワークゲートウェイ"
   },
   {
    "key": "C",
    "text": "仮想ネットワーク"
   },
   {
    "key": "D",
    "text": "ルートテーブル"
   }
  ],
  "correctAnswers": [
   "A"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "5.1.2「ネットワークセキュリティグループ（ NSG）」",
  "explanation": "仮想マシンへの特定の通信を許可するには、ネットワークセキュリティグループ (NSG) に許可のルールを構\n成する必要があります。",
  "supplement": "特定の通信だけ通したいときは、NSG に「許可」ルールを追加します。NSG は既定で多くの通信を拒否するため、必要なポート（例：HTTPS の 443 番）を明示的に許可する必要があります。",
  "diagram": "nsg"
 },
 {
  "id": "q60",
  "number": 60,
  "type": "choice",
  "chapter": 6,
  "chapterName": "ストレージサービス",
  "text": "Windows 10 を実行する複数のコンピューターから Azure サービスにネットワークドライブを割り当てる予\n定です。ネットワークドライブを割り当てるには、どのサービスを作成しますか？",
  "choices": [
   {
    "key": "A",
    "text": "Azure SQL Database"
   },
   {
    "key": "B",
    "text": "仮想マシンのデータディスク"
   },
   {
    "key": "C",
    "text": "ストレージアカウントの A zure Files (ファイル共有 )"
   },
   {
    "key": "D",
    "text": "ストレージアカウントの A zure BLOB"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "6.1.6「 Azure Files（ファイル共有）」",
  "explanation": "Azure Files（ファイル共有）を使用して、「ネットワークドライブの割り当て」を行うことができます。ネットワ\nークドライブの割り当てを行うと、ユーザーはあたかもローカルディスク(C ドライブや D ドライブ)にアクセスし\nているかのように、Azure 上のファイル共有にアクセスできます。"
 },
 {
  "id": "q62",
  "number": 62,
  "type": "choice",
  "chapter": 8,
  "chapterName": "ガバナンス・コンプライアンス・監視",
  "text": "組織のクラウド使用状況を業界標準のベストプラクティス（最善の方法）と比較する必要があります。何を\n使用すればいいですか？",
  "choices": [
   {
    "key": "A",
    "text": "Azure Monitor"
   },
   {
    "key": "B",
    "text": "Azure Service Health"
   },
   {
    "key": "C",
    "text": "Application Insights"
   },
   {
    "key": "D",
    "text": "Azure Advisor"
   }
  ],
  "correctAnswers": [
   "D"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "8.2.1「 Azure Advisor」",
  "explanation": "Azure Advisor とは、Azure のベストプラクティスに従って Azure リソースの構築や運用に関するアドバイス\nを行ってくれるサービスです。Azure Advisor を使用すると、サブスクリプション内にある Azure リソースの構\n成や利用統計情報を自動的に分析し、コストの費用対効果、セキュリティ、信頼性（高可用性）、パフォーマン\nスを向上させるための推奨事項が提供されます。そのため、ユーザーはサブスクリプションの環境がベストプラ\nクティスに従っているかを確認しながら、システムを構築することができます。"
 },
 {
  "id": "q63",
  "number": 63,
  "type": "truefalse",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。誤っている場合は「いいえ」を選択\nしてください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "企業は、パブリッククラウドに独自の物理サーバーを追加することで、社内ネットワークを拡張できます。",
   "プライベートクラウドはインターネットから切断する必要があります。",
   "ハイブリッドクラウドの一部はパブリッククラウドです。"
  ],
  "tfAnswers": [
   "いいえ",
   "いいえ",
   "はい"
  ],
  "review": "1.1.3「クラウドモデルとは」",
  "explanation": "パブリッククラウドに、独自の物理サーバーを追加する事はできません。したがって①の正解は「いいえ」で\nす。\nまた、プライベートクラウドを利用するために、インターネットから切断する必要はありません。したがって②\nの正解は「いいえ」です。\nそして、ハイブリッドクラウドはパブリッククラウドとプライベートクラウドの両方を利用するモデルです。した\nがって③の正解は「はい」です。"
 },
 {
  "id": "q64",
  "number": 64,
  "type": "choice",
  "chapter": 2,
  "chapterName": "Azureの基礎・コスト管理",
  "text": "Azure リソースをデプロイします。サービスの停止により、リソースが長期間使用できなくなります。\nMicrosoft は、お客様の銀行口座に自動的に返金します。\n手順 : 下線付きのテキストを確認してください。ステートメントが正しい場合は、[変更は必要ありません]\nを選択します。ステートメントが間違っている場合は、正しい文章を選択肢から選択してください。",
  "choices": [
   {
    "key": "A",
    "text": "変更は必要ありません。"
   },
   {
    "key": "B",
    "text": "リソースを別のサブスクリプションに自動的に移行します。"
   },
   {
    "key": "C",
    "text": "サービスクレジットが付与されます。"
   },
   {
    "key": "D",
    "text": "Azure クレジットと交換できるクーポンコードを送信します。"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "2.2.4「サービスレベルアグリーメント(SLA)」",
  "explanation": "Azure で提供されるサービスが、マイクロソフト側の原因によって SLA 水準を下回った場合、Azure 利用者\nは Azure 利用料金の返金を受けることができます。ただし、返金は現金で支払われるわけではなく、顧客に\n「サービスクレジット」という形で付与され、その金額が利用料金から割り引かれます。"
 },
 {
  "id": "q65",
  "number": 65,
  "type": "choice",
  "chapter": 7,
  "chapterName": "ID・アクセス・セキュリティ",
  "text": "あなたの会社は Azure への移行を計画しています。会社にはいくつかの部門があります。各部門で使用\nされるすべての Azure リソースは、部門管理者によって管理されます。\n部門ごとに Azure をセグメント化するために考えられる 2 つの手法は何ですか?",
  "choices": [
   {
    "key": "A",
    "text": "複数のサブスクリプション"
   },
   {
    "key": "B",
    "text": "複数の Azure Active Directory (Azure AD) テナント"
   },
   {
    "key": "C",
    "text": "複数のリージョン"
   },
   {
    "key": "D",
    "text": "複数のリソースグループ"
   }
  ],
  "correctAnswers": [
   "A",
   "D"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "7.1.6「 Azure のアクセス管理」",
  "explanation": "リソースの管理権限を委任できる範囲は、管理グループ、サブスクリプション、リソースグループ、リソースです。したがって、\n正解は A と D です。"
 },
 {
  "id": "q66",
  "number": 66,
  "type": "choice",
  "chapter": 3,
  "chapterName": "Azureの管理ツール・ガバナンス基礎",
  "text": "（）にあてはまる選択肢として正しいものを選択してください。\n（）はハイブリッドとマルチクラウドの構成に Azure のコンプライアンスと監視を提供できる。",
  "choices": [
   {
    "key": "A",
    "text": "Azure AD Connect"
   },
   {
    "key": "B",
    "text": "Azure Arc"
   },
   {
    "key": "C",
    "text": "Azure Front Door"
   },
   {
    "key": "D",
    "text": "Azure Policy"
   }
  ],
  "correctAnswers": [
   "B"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "3.4.1「 Azure Arc とは」",
  "explanation": "Azure Arc を使用すると、マルチクラウド、ハイブリッドクラウド環境の IT 資産情報管理やサーバーの監視\nおよび保護、ログ管理などを Azure に統合できます。"
 },
 {
  "id": "q67",
  "number": 67,
  "type": "choice",
  "chapter": 5,
  "chapterName": "ネットワークサービス",
  "text": "ネットワークセキュリティグループの受信セキュリティ規則のソースとして使用できるリソースはどれですか?",
  "choices": [
   {
    "key": "A",
    "text": "アプリケーションセキュリティグループのみ"
   },
   {
    "key": "B",
    "text": "IP アドレスのみ"
   },
   {
    "key": "C",
    "text": "サービスタグのみ"
   },
   {
    "key": "D",
    "text": "IP アドレス、サービスタグ、およびアプリケーションセキュリティグループ"
   }
  ],
  "correctAnswers": [
   "D"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "5.1.2「ネットワークセキュリティグループ（ NSG）」",
  "explanation": "ネットワークセキュリティグループ(NSG)に受信セキュリティ規則を追加するには、対象を指定するのに IP ア\nドレス、サービスタグ、およびアプリケーションセキュリティグループを使用できます。"
 },
 {
  "id": "q69",
  "number": 69,
  "type": "truefalse",
  "chapter": 7,
  "chapterName": "ID・アクセス・セキュリティ",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。誤っている場合は「いいえ」を選\n択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "オンプレミスの Active Directory に保存されている ID は、Microsoft Entra ID に同期できます。",
   "Microsoft Entra ID、サードパーティのクラウドサービス、オンプレミスの Active Directory に保存されている ID を使用して、Azure リソースにアクセスできます。",
   "Azure には、Azure リソースへの安全なアクセスを提供する組み込みの認証および承認サービスがあります。"
  ],
  "tfAnswers": [
   "はい",
   "はい",
   "はい"
  ],
  "review": "7.1.1 「認証と認可 ( 承認 ) 」、 7.1.2 「 Azure Active Directory(Microsoft Entra ID) 」、 7.1.3 「 Active",
  "explanation": "Directory Domain Services (AD DS)」\nオンプレミスの Active Directory Do main Services に保存されている ID は、ディレクトリ同期により\n\fMicrosoft Entra ID (Azure AD) に同期できるため、①の正解は「はい」です。\nまた、他の Microsoft Entra テナント、Google などのサードパーティのクラウドサービス、オンプレミスの AD\nの ID を利用して Azure のリソースにアクセスさせるには、フェデレーションを構成できます。したがって、②の\n正解は「はい」です。\nそして、Azure の認証と承認を提供しているのは、Microsoft Entra ID です。したがって、③の正解は「はい」\nです。"
 },
 {
  "id": "q70",
  "number": 70,
  "type": "truefalse",
  "chapter": 8,
  "chapterName": "ガバナンス・コンプライアンス・監視",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。\n誤っている場合は「いいえ」を選択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Azure Advisor は、Azure Backup によって保護されていない Azure 仮想マシンの一覧を表示できる",
   "マイクロソフトのサポートを維持するには、Azure Advisor によって提供されるセキュリティの推奨事項を 30 日以内に実装する必要がある"
  ],
  "tfAnswers": [
   "はい",
   "いいえ"
  ],
  "review": "8.2.1「 Azure Advisor」",
  "explanation": "Azure Advisor は、既存のリソースに対してさまざまな推奨事項を提供します。たとえば、Azure Backup に\nよって保護されていない仮想マシンの一覧を表示します。また、Azure Advisor は推奨事項を表示するだけで、\nそれらに従った構成を行わなかったとしても、マイクロソフトに何かを制限されるわけではありません。"
 },
 {
  "id": "q71",
  "number": 71,
  "type": "choice",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "すべてのハードウェアリソースがサードパーティによって所有され、複数の組織で共有されるのは、どのタイ\nプのクラウドモデルですか？",
  "choices": [
   {
    "key": "A",
    "text": "プライベート"
   },
   {
    "key": "B",
    "text": "ハイブリッド"
   },
   {
    "key": "C",
    "text": "パブリック"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "1.1.3「クラウドモデルとは」",
  "explanation": "パブリッククラウドは、クラウドサービスプロバイダーのハードウェアリソースを利用する形態です。クラウドサ\nービスプロバーダーのリソースは、複数の組織で共有するため、安価にリソースを利用する事ができます。"
 },
 {
  "id": "q72",
  "number": 72,
  "type": "choice",
  "chapter": 7,
  "chapterName": "ID・アクセス・セキュリティ",
  "text": "次の文章の（）にあてはまる文章を選択肢から選択してください。\n複数の仮想マシンに同時に管理権限を委任するには、あなたは仮想マシンを（）\n展開しなければならない。",
  "choices": [
   {
    "key": "A",
    "text": "同じリージョンに"
   },
   {
    "key": "B",
    "text": "同じ ARM テンプレートを使用して"
   },
   {
    "key": "C",
    "text": "同じリソースグループに"
   },
   {
    "key": "D",
    "text": "同じ可用性ゾーンに"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "7.1.6「 Azure のアクセス管理」",
  "explanation": "複数のリソースに同時に管理権限を委任したい場合は、リソースグループを使用します。",
  "supplement": "複数のリソースへ一度に権限を渡したいときは、それらをまとめたリソースグループ単位で権限（ロール）を割り当てます。グループに付けた権限は中のリソース全体に効くため、1 つずつ設定する手間が省けます。",
  "diagram": "resource-hierarchy"
 },
 {
  "id": "q73",
  "number": 73,
  "type": "choice",
  "chapter": 3,
  "chapterName": "Azureの管理ツール・ガバナンス基礎",
  "text": "Azure 予約を購入できる最長の期間は何年ですか?",
  "choices": [
   {
    "key": "A",
    "text": "1 年"
   },
   {
    "key": "B",
    "text": "2 年"
   },
   {
    "key": "C",
    "text": "3 年"
   },
   {
    "key": "D",
    "text": "5 年"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "3.5.1「 Azure のコストに与える要因について」",
  "explanation": "Azure 予約は、1 年間もしくは 3 年間の利用をあらかじめ確約することで、最大 72%の利用料金の割引を\n受けられるサービスです。したがって、正解は C です。"
 },
 {
  "id": "q74",
  "number": 74,
  "type": "choice",
  "chapter": 5,
  "chapterName": "ネットワークサービス",
  "text": "Azure 環境には、複数の Azure 仮想マシンが含まれています。\nVM1 という名前の仮想マシンが HTTP 経由でインターネットからアクセスできることを確認するためには、\n何をしますか？ 2 つ選択してください",
  "choices": [
   {
    "key": "A",
    "text": "DDoS 保護計画を変更します。"
   },
   {
    "key": "B",
    "text": "Azure Firewall を構成します。"
   },
   {
    "key": "C",
    "text": "Azure Traffic Manager プロファイルを変更します。"
   },
   {
    "key": "D",
    "text": "ネットワークセキュリティグループ (NGS) を構成する"
   }
  ],
  "correctAnswers": [
   "B",
   "D"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "5.1.2「ネットワークセキュリティグループ（ NSG）」",
  "explanation": "仮想マシンの通信を許可するには、ネットワークセキュリティグループ (NSG)に許可のルールを構成します。また、Azure\nFirewall サービスをデプロイし、ファイアウォールルールを構成する事で仮想マシンへの特定の通信を許可することもできま\nす。Azure Firewall は、Azure 仮想ネットワークに配置するクラウドベースのステートフルなファイアウォールで\nす。Azure Firewall を作成すると、インターネット、オンプレミス、仮想ネットワーク間などさまざまな通信を制\n御できます。"
 },
 {
  "id": "q75",
  "number": 75,
  "type": "truefalse",
  "chapter": 6,
  "chapterName": "ストレージサービス",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。\n誤っている場合は「いいえ」を選択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "AzCopy は、ストレージアカウントとの間で BLOB またはファイルをコピーするために使用されるコマンドラインツールです。",
   "Azure Storage Explorer は、大量のデータの転送に使用されるクラウドホスト型の移行サービスです。",
   "Azure File Sync は、Azure Files と Windows ファイルサーバーの間でファイルとフォルダーを同期します。"
  ],
  "tfAnswers": [
   "はい",
   "いいえ",
   "はい"
  ],
  "review": "6.2.1「 Azure Storage Explorer」、6.2.2「 AzCopy」、6.2.3「 Azure File Sync」",
  "explanation": "AzCopy は、ストレージアカウントにデータをコピーするためのコマンドラインツールです。AzCopy は、ストレ\nージアカウント間や、オンプレミス、そして他のクラウドサービスからもデータのコピーを行えます。したがって、\n①の答えは「はい」です。Azure Storage Explorer は、ストレージアカウントのデータを GUI で簡単に操作する\nためのアプリケーションであり、大量データを移行するサービスではありません。大量のデータ転送に使用され\nるサービスには、Azure Data Box があります。したがって、②の答えは「いいえ」です。③Azure File Sync は、\nAzure Files とオンプレミスの Windows ファイルサーバー上の共有フォルダーを同期し、Azure Files 上で組織\nのファイル共有を一元管理できるサービスです。したがって、③の答えは「はい」です。"
 },
 {
  "id": "q76",
  "number": 76,
  "type": "truefalse",
  "chapter": 7,
  "chapterName": "ID・アクセス・セキュリティ",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。誤っている場合は「いいえ」を選\n択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Microsoft Entra ID で、グループポリシーを作成できます。",
   "Microsoft Entra ID に W indows 10 デバイスを参加させることができます。",
   "Microsoft Entra ID に A ndroid デバイスを参加させることができます。"
  ],
  "tfAnswers": [
   "いいえ",
   "はい",
   "いいえ"
  ],
  "review": "7.1.2 「 Azure Active Directory(Microsoft Entra ID) 」、 7.1.3 「 Active Directory Domain Services",
  "explanation": "(AD DS)」\nグループポリシーは、オンプレミスの AD DS でユーザーやデバイスに対するさまざまな制御を行うことがで\nきる機能です。Microsoft Entra ID(Azure AD)では使用できないので、①の正解は「いいえ」です。\n\f     また、Microsoft Entra ID には Windows10/11 のデバイスを参加させることができるため、②の正解は「は\nい」です。\nそして、Microsoft Entra ID には Android デバイスを参加させることはできません。Windows 10/11 以外\nのデバイスは、Microsoft Entra ID に登録します。したがって、③の正解は、「いいえ」です。"
 },
 {
  "id": "q77",
  "number": 77,
  "type": "truefalse",
  "chapter": 8,
  "chapterName": "ガバナンス・コンプライアンス・監視",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。\n誤っている場合は「いいえ」を選択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Azure Advisor は、Azure AD 環境のセキュリティを向上させる方法に関する推奨事項を提供する",
   "Azure Advisor は、Azure 仮想マシンの実行コストを削減する方法に関する推奨事項を提供する",
   "Azure Advisor は、Azure 仮想マシンでネットワーク設定を構成する方法に関する推奨事項を提供する"
  ],
  "tfAnswers": [
   "はい",
   "はい",
   "いいえ"
  ],
  "review": "8.2.1「 Azure Advisor」",
  "explanation": "Azure Advisor は、MFA の構成など Microsoft Entra ID(Azure AD）環境のセキュリティレベルの向上に関\nする推奨事項も提供します。また、十分に活用されていない仮想マシンを特定し、コストの削減方法に関する\n推奨事項を提供します。Azure Advisor には推奨事項が表示されますが、リソースの構築手順を教えてくれる\nガイドの機能はありません。"
 },
 {
  "id": "q78",
  "number": 78,
  "type": "choice",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "次の文章の下線部分の正しいものを選択肢から選択してください。\nインフラストラクチャーをプライベートクラウドでホストしている組織は、データセンターを廃止できます。",
  "choices": [
   {
    "key": "A",
    "text": "変更は必要ありません。"
   },
   {
    "key": "B",
    "text": "ハイブリッドクラウド"
   },
   {
    "key": "C",
    "text": "パブリッククラウド"
   },
   {
    "key": "D",
    "text": "Hyper-V ホスト上"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "1.1.3「クラウドモデルとは」",
  "explanation": "パブリッククラウドはクラウドサービスプロバイダーのハードウェアリソースを利用する形態であるため、オンプ\nレミスのハードウェアを利用しません。"
 },
 {
  "id": "q79",
  "number": 79,
  "type": "truefalse",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。\n誤っている場合は「いいえ」を選択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Azure の従量課金料金は、CAPEX の一例です。",
   "データセンターの電気料金は、O PEX の一例です。",
   "クラウドコンピューティングを利用することで、CA PEX を OPEX にシフトすることが可能です。"
  ],
  "tfAnswers": [
   "いいえ",
   "はい",
   "はい"
  ],
  "review": "1.1.2「クラウドを利用するメリット」",
  "explanation": "サーバー本体、ソフトウェア、データセンターの拡張費用など資本とみなされる財産にかかる費用のことを\nCAPEX といい、電気代、人件費など運用コストとしてかかる費用のことを OPEX と言います。\nAzure の利用料金は OPEX の一例です。したがって、①の答えは「いいえ」です。データセンターの電気代は\nOPEX の一例です。したがって、②の答えは「はい」です。クラウドコンピューティングを用いることで、CAPEX と\nして発生していた費用を OPEX 化することができます。これにより、初期投資を抑えたり、CAPEX と OPEX の\nバランスを取ったりすることが可能になります。したがって、③の答えは「はい」です。"
 },
 {
  "id": "q80",
  "number": 80,
  "type": "truefalse",
  "chapter": 5,
  "chapterName": "ネットワークサービス",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。誤っている場合は「いいえ」を選択し\nてください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "ネットワークセキュリティグループ(NSG)を仮想ネットワークのサブネットに関連付けることができます。",
   "ネットワークセキュリティグループ(NSG)を仮想ネットワークに関連付けることができます。",
   "ネットワークセキュリティグループ(NSG)をネットワークインターフェイスに関連付けることができます。"
  ],
  "tfAnswers": [
   "はい",
   "いいえ",
   "はい"
  ],
  "review": "5.1.2「ネットワークセキュリティグループ（ NSG）」",
  "explanation": "ネットワークセキュリティグループ (NSG)は、仮想ネットワークのサブネットとネットワークインターフェイスに関連付けることが\nできます。したがって、①と③の正解は「はい」で、②の正解は「いいえ」です。"
 },
 {
  "id": "q81",
  "number": 81,
  "type": "choice",
  "chapter": 6,
  "chapterName": "ストレージサービス",
  "text": "次の文章の（）にあてはまるものを以下の選択肢から選択してください。\n（）は、大量のデータを迅速、安価、信頼性の高い方法で物理的に転送する移行サービスです。",
  "choices": [
   {
    "key": "A",
    "text": "Azure Data Box"
   },
   {
    "key": "B",
    "text": "Azure Databricks"
   },
   {
    "key": "C",
    "text": "Azure File Sync"
   },
   {
    "key": "D",
    "text": "Azure Migrate"
   }
  ],
  "correctAnswers": [
   "A"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "6.3.3「 Azure Data Box」",
  "explanation": "Azure Data Box は、オンプレミスにある大量のデータを安全に Azure に移行するサービスです。Azure Data\nBox を使用すると、物理的なハードディスクに大量のデータを保存して配送するため、オフラインでのデータ移\n\f行が可能になります。そのため、ネットワークに影響を与えることなく最大 100TB の大量のデータを転送でき\nます。"
 },
 {
  "id": "q82",
  "number": 82,
  "type": "truefalse",
  "chapter": 7,
  "chapterName": "ID・アクセス・セキュリティ",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。誤っている場合は「いいえ」を選択\nしてください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Microsoft Entra ID の資格情報を使用して Windows 10 を実行するコンピューターにサインインするには、コンピューターが Azure AD に参加している必要があります。",
   "Microsoft Entra ID のユーザーはリソースグループを使用して分類されています。",
   "Microsoft Entra ID の動的メンバーシップルールをサポートしています。"
  ],
  "tfAnswers": [
   "はい",
   "いいえ",
   "はい"
  ],
  "review": "7.1.2「 Azure Active Directory(Microsoft Entra ID)」",
  "explanation": "Windows10 や 11 のデバイスが Microsoft Entra ID(Azure AD) に参加していると、コンピューターにサイン\nインする際は Microsoft Entra ID の資格情報を使用します。したがって、①の正解は「はい」です。\nまた、Microsoft Entra ID のユーザーは、リソースグループでは分類できません。したがって、②の正解は「い\nいえ」です。\nそして、Microsoft Entra ID の有償ライセンスがあると、動的グループが利用できるようになります。動的グル\nープは、ルールをもとにメンバーシップを動的に構成できるグループです。したがって、③の答えは「はい」です。"
 },
 {
  "id": "q83",
  "number": 83,
  "type": "truefalse",
  "chapter": 8,
  "chapterName": "ガバナンス・コンプライアンス・監視",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。\n誤っている場合は「いいえ」を選択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Azure Advisor は、パーソナライズされた推奨事項を提供します。",
   "Azure Advisor は、複数の Azure サブスクリプションにわたる推奨事項を提供できます。"
  ],
  "tfAnswers": [
   "はい",
   "はい"
  ],
  "review": "8.2.1「 Azure Advisor」",
  "explanation": "Azure Advisor を使用すると、組織のサブスクリプション内にある Azure リソースの構成や利用統計情報を\n自動的に分析し、コストの費用対効果、セキュリティ、信頼性（高可用性）、パフォーマンスを向上させるため\nの推奨事項が提供されます。また Azure Advisor は、同一テナント内にある複数のサブスクリプション環境に\n関する推奨事項をまとめて確認できます。"
 },
 {
  "id": "q84",
  "number": 84,
  "type": "choice",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "50 台のサーバーを含むオンプレミスネットワークがあります。ユーザーに追加のリソースを提供するソリュ\nーションを推奨する必要があります。ソリューションは、設備投資と運用コストを最小限に抑える必要がありま\nす。何を推奨しますか?",
  "choices": [
   {
    "key": "A",
    "text": "パブリッククラウドへの完全な移行"
   },
   {
    "key": "B",
    "text": "追加のデータセンター"
   },
   {
    "key": "C",
    "text": "プライベートクラウド"
   },
   {
    "key": "D",
    "text": "ハイブリッドクラウド"
   }
  ],
  "correctAnswers": [
   "D"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "1.1.3「クラウドモデルとは」",
  "explanation": "オンプレミスのサーバーをすべてクラウドに移行すると、設備投資は最小限になりますが、その分利用した\n分の運用コストが発生します。したがって、クラウドサービスプロバイダーのリソースとオンプレミスのリソース\nをバランスよく利用するハイブリッドクラウドが、設備投資と運用コストを最小限に抑えることができます。"
 },
 {
  "id": "q85",
  "number": 85,
  "type": "choice",
  "chapter": 3,
  "chapterName": "Azureの管理ツール・ガバナンス基礎",
  "text": "（）にあてはまる選択肢として正しいものを選択してください。\n（）を使用すると、オンプレミスの Windows Server を Azure に移行したときに削減されるコストを試\n算できます。",
  "choices": [
   {
    "key": "A",
    "text": "料金計算ツール"
   },
   {
    "key": "B",
    "text": "Azure Migrate"
   },
   {
    "key": "C",
    "text": "TCO 計算ツール"
   },
   {
    "key": "D",
    "text": "Azure Databricks"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "3.5.2「料金計算ツールと総保有コスト（ TCO ）計算ツール」",
  "explanation": "Azure では「料金計算ツール」と「 TCO 計算ツール」という 2 種類の料金見積もりツールを公開しています。\n料金計算ツールはリソースの積み上げでコストを算出するのに対し、総所有コスト(TCO)計算ツールはシナリオ\nベースでコストを予測します。オンプレミスのサーバー類を Azure に移行した場合の削減額を試算するのは、\nTCO 計算ツールです。したがって、正解は C です。"
 },
 {
  "id": "q86",
  "number": 86,
  "type": "choice",
  "chapter": 5,
  "chapterName": "ネットワークサービス",
  "text": "あなたの会社は、複数の Web サーバーと複数のデータベースサーバーを A zure にデプロイすることを計画\nしています。\nWeb サーバーからデータベースサーバーへの接続の種類を制限するには、何を使用しますか？",
  "choices": [
   {
    "key": "A",
    "text": "ネットワークセキュリティグループ (NSG)"
   },
   {
    "key": "B",
    "text": "Azure Service Bus"
   },
   {
    "key": "C",
    "text": "ローカルネットワークゲートウェイ"
   },
   {
    "key": "D",
    "text": "ルートフィルター"
   }
  ],
  "correctAnswers": [
   "A"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "5.1.2「ネットワークセキュリティグループ（ NSG）」",
  "explanation": "Azure のリソース間のネットワークの通信を制御するには、ネットワークセキュリティグループ(NSG)を使用します。",
  "supplement": "リソース間の通信を制御する基本が NSG（ネットワークセキュリティグループ）です。許可／拒否のルールを並べ、サブネットや NIC（VM のネットワーク口）に割り当てて使います。",
  "diagram": "nsg"
 },
 {
  "id": "q87",
  "number": 87,
  "type": "truefalse",
  "chapter": 7,
  "chapterName": "ID・アクセス・セキュリティ",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。誤っている場合は「いいえ」を選択\nしてください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Microsoft Defender for Cloud は、Azure リソースとオンプレミスのリソースを監視できます。",
   "Microsoft Defender for Cloud のすべての機能は無料です。",
   "Microsoft Defender for Cloud から、規制遵守レポートをダウンロードできます。"
  ],
  "tfAnswers": [
   "はい",
   "いいえ",
   "はい"
  ],
  "review": "7.2.3「 Microsoft Defender for Cloud」",
  "explanation": "Microsoft Defender for Cloud は、Azure リソースだけではなく、サードパーティのリソースやオンプレミス\nのリソースを監視できます。したがって、①の正解は「はい」です。\nまた、Microsoft Defender for Cloud には有料のエディションがあり、高度な機能を使うことができます。し\nたがって、②の正解は「いいえ」です。\nそして、Microsoft Defender for Cloud では、[規制コンプライアンス]ダッシュボードからレポートをダウンロ\nードできます。したがって、③の正解は「はい」です。"
 },
 {
  "id": "q88",
  "number": 88,
  "type": "choice",
  "chapter": 8,
  "chapterName": "ガバナンス・コンプライアンス・監視",
  "text": "十分に活用されていない、または使用されていない Azure 仮想マシンを特定するには、何を使用します\nか？",
  "choices": [
   {
    "key": "A",
    "text": "Azure Cost Management"
   },
   {
    "key": "B",
    "text": "Azure Advisor"
   },
   {
    "key": "C",
    "text": "Azure 予約"
   },
   {
    "key": "D",
    "text": "Azure Policy"
   }
  ],
  "correctAnswers": [
   "B"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "8.2.1「 Azure Advisor」",
  "explanation": "Azure Advisor は、十分に活用されていない仮想マシンを特定し、コストの削減方法に関する推奨事項を\n提供します。"
 },
 {
  "id": "q89",
  "number": 89,
  "type": "choice",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "オンプレミスでホストされている 50 台の仮想マシンと、Azure でホストされている 50 台の仮想マシンがあ\nります。オンプレミスの仮想マシンと Azure 仮想マシンが相互に接続します。\nこれはどのタイプのクラウドモデルですか?",
  "choices": [
   {
    "key": "A",
    "text": "ハイブリッド"
   },
   {
    "key": "B",
    "text": "パブリック"
   },
   {
    "key": "C",
    "text": "プライベート"
   }
  ],
  "correctAnswers": [
   "A"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "1.1.3「クラウドモデルとは」",
  "explanation": "オンプレミスの仮想マシンと Azure の仮想マシンの両方を利用するクラウドモデルは、ハイブリッドクラウド\nサービスモデルです。",
  "supplement": "オンプレミス（自社設備）と Azure（パブリッククラウド）の両方を組み合わせて使うモデルがハイブリッドクラウドです。手元に置きたいデータは社内に、伸び縮みさせたい部分はクラウドに、と使い分けられます。",
  "diagram": "deployment-models"
 },
 {
  "id": "q90",
  "number": 90,
  "type": "choice",
  "chapter": 6,
  "chapterName": "ストレージサービス",
  "text": "（）にあてはまるもの以下の選択肢から正しいものを選択してください。\nパブリック Web サイトを Azure に移行することを計画している場合は（）を計画する必要がありま\nす。",
  "choices": [
   {
    "key": "A",
    "text": "毎月の使用料金の支払い"
   },
   {
    "key": "B",
    "text": "VPN を展開すること"
   },
   {
    "key": "C",
    "text": "すべての Web サイトデータを Azure に転送する料金を支払うこと"
   },
   {
    "key": "D",
    "text": "ウェブサイトへの接続数を減らすこと"
   }
  ],
  "correctAnswers": [
   "A"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "6.3.2「 Azure Migrate」",
  "explanation": "オンプレミスの仮想マシンを Azure に移行することを計画している場合は、毎月どの程度の使用料金を支\n払う必要があるのかを算出し、運用コストを計画します。Azure Migrate を使用してオンプレミスの仮想マシン\nの検出と評価を行うと、移行したい仮想マシンが問題なく Azure に移行可能であるか、適正な仮想マシンの\nサイズ、移行した後の運用コストなどを確認できます。"
 },
 {
  "id": "q91",
  "number": 91,
  "type": "choice",
  "chapter": 5,
  "chapterName": "ネットワークサービス",
  "text": "あなたは複数の Azure 仮想マシンを展開する予定です。\nインターネット上のデバイスが仮想マシンにアクセスするために使用できるポートを制御する必要があります。\n何を使うべきですか？",
  "choices": [
   {
    "key": "A",
    "text": "Microsoft Entra ロール"
   },
   {
    "key": "B",
    "text": "Azure キーコンテナー"
   },
   {
    "key": "C",
    "text": "Microsoft Entra グループ"
   },
   {
    "key": "D",
    "text": "ネットワークセキュリティグループ (NSG)"
   }
  ],
  "correctAnswers": [
   "D"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "5.1.2「ネットワークセキュリティグループ（ NSG）」",
  "explanation": "Azure の仮想マシンへの接続を制御するには、ネットワークセキュリティグループ(NSG)を使用します。",
  "supplement": "NSG（ネットワークセキュリティグループ）は、通信を「許可／拒否」のルールでふるい分ける関所です。VM やサブネットに割り当て、必要なポートだけ開けて、余計な通信を遮断します。",
  "diagram": "nsg"
 },
 {
  "id": "q92",
  "number": 92,
  "type": "choice",
  "chapter": 7,
  "chapterName": "ID・アクセス・セキュリティ",
  "text": "次の文章の（）にあてはまるサービス名を選択肢から選択してください。\nあなたは、（）を使用する事により、Just-in-Time(JIT) VM アクセスを有効にすることができます。",
  "choices": [
   {
    "key": "A",
    "text": "Azure Bastion"
   },
   {
    "key": "B",
    "text": "Azure Firewall"
   },
   {
    "key": "C",
    "text": "Azure Front Door"
   },
   {
    "key": "D",
    "text": "Microsoft Defender for Cloud"
   }
  ],
  "correctAnswers": [
   "D"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "7.2.3「 Microsoft Defender for Cloud」",
  "explanation": "Just-In-Time VM アクセスとは、必要な時にだけ NSG に RDP 接続などを許可するルールを構成できる機\n能です。この機能により、狙われやすい RDP 接続や SSH 接続を許可したままにする必要がないため、不正に\nアクセスされてしまうことを極力防ぐことができます。この機能は、Microsoft Defender for Cloud により提\n供されます。"
 },
 {
  "id": "q93",
  "number": 93,
  "type": "truefalse",
  "chapter": 8,
  "chapterName": "ガバナンス・コンプライアンス・監視",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。誤っている場合は「いいえ」を選択\nしてください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Azure Service Health から、Azure 環境に作成されたサービスと、Azure のすべてのサービスの正常性を表示できます。",
   "Azure Service Health を使用して、サービスの障害が特定の仮想マシンに影響を与えるのを防ぐことができます。"
  ],
  "tfAnswers": [
   "はい",
   "いいえ"
  ],
  "review": "8.2.2「 Azure Service Health（サービス正常性）」",
  "explanation": "Azure Service Health の「リソース正常性」メニューを使用して、Azure 環境内のリソースの正常性を確認\nできます。また、「サービスに関する問題」メニューでは、 Azure サービス全体の障害情報を確認できます。\nAzure Service Health はサービスの正常性を監視するサービスであり、リソースを障害から保護するための\nサービスではありません。"
 },
 {
  "id": "q94",
  "number": 94,
  "type": "truefalse",
  "chapter": 3,
  "chapterName": "Azureの管理ツール・ガバナンス基礎",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。誤っている場合は「いいえ」を選\n択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "従量課金制では、クラウドでホストされている仮想マシンとの間で送受信されるすべてのデータに対して固定料金を支払います。",
   "従量課金制では、使用した分だけを支払うため、全体的なコストを削減できます。",
   "サーバーレスコンピューティングは、従量課金制の一例です。"
  ],
  "tfAnswers": [
   "いいえ",
   "はい",
   "はい"
  ],
  "review": "3.5.1「 Azure のコストに与える要因について」、4.1.5「 Azure Functions」",
  "explanation": "Microsoft Azure では、主に仮想マシンがリージョンの外に送信したデータに対してデータ転送料が発生し\nます。したがって、①の正解は「いいえ」です。\nまた、従量課金制では、使用した分の料金のみを支払うため、全体的なコストを削減できます。したがって、\n②の正解は「はい」です。\nそして、Azure Functions などサーバーレスコンピューティングでは、処理を実行した 1 秒単位の使用量や\n実行した回数に応じて料金を支払う方法が用意されています。したがって、③の正解は「はい」です。"
 },
 {
  "id": "q95",
  "number": 95,
  "type": "choice",
  "chapter": 3,
  "chapterName": "Azureの管理ツール・ガバナンス基礎",
  "text": "（）にあてはまるものとして正しいものを選択してください。\nAzure で（）を使用して、Azure サブスクリプションの現在の請求期間のコストが指定された制限を超\nえたときに電子メールアラートを送信できます。",
  "choices": [
   {
    "key": "A",
    "text": "Advisor の推奨事項"
   },
   {
    "key": "B",
    "text": "アクセス制御（ IAM）"
   },
   {
    "key": "C",
    "text": "予算アラート"
   },
   {
    "key": "D",
    "text": "コンプライアンス"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "3.5.3「コストの管理ツール」",
  "explanation": "予算アラートツールで「予算」を設定すると、Azure の利用料金があらかじめ設定された予算額を超過した\n場合に、メールなどの手段で管理者に通知することができます。予算アラートを構成するには、最初に Azure\nの月額、四半期額もしくは年額の予算額を設定します。"
 },
 {
  "id": "q96",
  "number": 96,
  "type": "choice",
  "chapter": 7,
  "chapterName": "ID・アクセス・セキュリティ",
  "text": "会社の Azure 環境が規制要件を満たしているかどうかを評価するには、何を使用する必要がありますか？",
  "choices": [
   {
    "key": "A",
    "text": "Microsoft Defender for Cloud"
   },
   {
    "key": "B",
    "text": "Azure Advisor"
   },
   {
    "key": "C",
    "text": "Azure Service の正常性"
   },
   {
    "key": "D",
    "text": "Azure AD Identity Protection"
   }
  ],
  "correctAnswers": [
   "A"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "7.2.3「 Microsoft Defender for Cloud」",
  "explanation": "Microsoft Defender for Cloud を使用すると、組織の Azure 環境が規制要件を満たしているかの評価を\n確認する事ができます。"
 },
 {
  "id": "q97",
  "number": 97,
  "type": "choice",
  "chapter": 8,
  "chapterName": "ガバナンス・コンプライアンス・監視",
  "text": "3 台の仮想マシンのログを収集しています。分析のためにクエリをかけたいと考えています。どのサービスを\n使用しますか？ 2 つ選択してください。",
  "choices": [
   {
    "key": "A",
    "text": "Azure Service Health"
   },
   {
    "key": "B",
    "text": "Azure Monitor"
   },
   {
    "key": "C",
    "text": "Log Analytics"
   },
   {
    "key": "D",
    "text": "Azure Advisor"
   },
   {
    "key": "E",
    "text": "Azure Service Bus"
   }
  ],
  "correctAnswers": [
   "B",
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "8.2.3「 Azure Monitor（モニター）」",
  "explanation": "Azure Monitor で収集したログやメトリックは、Lo g Analytics ワークスペースに保存できます。ログのクエリ\nは、Log Analytics ワークスペースと Azure Monitor の「ログ」メニューから実行できます。"
 },
 {
  "id": "q98",
  "number": 98,
  "type": "truefalse",
  "chapter": 8,
  "chapterName": "ガバナンス・コンプライアンス・監視",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。\n誤っている場合は「いいえ」を選択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Azure Monitor は、複数の Azure サブスクリプションにわたってリソースを監視できる",
   "Microsoft Entra アクティビティログが、Azure Monitor に表示されるように構成できる"
  ],
  "tfAnswers": [
   "はい",
   "いいえ"
  ],
  "review": "8.2.3「 Azure Monitor（モニター）」",
  "explanation": "Azure AD (Microsoft Entra) テナントに複数のサブスクリプションが存在する場合、それぞれのサブスクリ\nプションで発生したイベントやその中のリソースを監視してアクティビティログを取得できます。また、アクティ\nビティログはサブスクリプション環境の管理操作ログであり、Microsoft Entra ID のログとは種類が異なりま\nす。Microsoft Entra ID ではサインインログや監査ログの取得を行えます。"
 },
 {
  "id": "q99",
  "number": 99,
  "type": "truefalse",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。誤っている場合は「いいえ」を選\n択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Software as a Service(SaaS)では、顧客がソフトウェアの更新プログラムを適用しなければならない。",
   "Infrastructure as a Service(IaaS)では、使用したいソフトウェアを顧客がインストールしなければならない。",
   "Azure Backup は、Platfo rm as a Service(PaaS)の一例です。"
  ],
  "tfAnswers": [
   "いいえ",
   "はい",
   "はい"
  ],
  "review": "1.2「クラウドコンピューティングのサービスモデル」",
  "explanation": "Software as a Service(SaaS)では、クラウドサービスプロバイダーがソフトウェアの管理をします。したがって、\n①の正解は「いいえ」です。\nまた、Infrastructure as a Service(IaaS)では、仮想マシン、ミドルウェア、アプリ、データを顧客が管理しなけ\nればなりません。したがって、②の正解は「はい」です。\nそして、Azure Backup は Platform as a Service(PaaS)に位置づけられているので、③の正解は「はい」です。"
 },
 {
  "id": "q100",
  "number": 100,
  "type": "choice",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "あなたの会社には、複数のサーバーを含むオンプレミスネットワークがあります。同社は、ネットワーク管理\n者の次の管理責任を削減する予定です。\n•アプリケーションデータのバックアップ\n•故障したサーバーハードウェアの交換\n•物理サーバーのセキュリティの管理\n•サーバーの OS の更新\n•共有ドキュメントへのアクセス許可の管理\n同社は、いくつかのサーバーを Azure 仮想マシンに移行する予定です。計画された移行後に軽減される管\n理責任を特定する必要があります。どの 2 つの責任が軽減されますか?",
  "choices": [
   {
    "key": "A",
    "text": "故障したサーバーハードウェアの交換"
   },
   {
    "key": "B",
    "text": "アプリケーションデータのバックアップ"
   },
   {
    "key": "C",
    "text": "物理サーバーのセキュリティの管理"
   },
   {
    "key": "D",
    "text": "サーバーの OS の更新"
   },
   {
    "key": "E",
    "text": "共有ドキュメントへのアクセス許可の管理"
   }
  ],
  "correctAnswers": [
   "A",
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "1.2.1「 IaaS (Infrastructure as a Service)」",
  "explanation": "Azure の仮想マシンは IaaS です。IaaS は、クラウドサービスプロバイダーがハードウェアと物理サーバーを管\n理します。したがって、移行後に管理責任が軽減するのは、故障したサーバーハードウェアの交換と物理サー\nバーのセキュリティの管理です。"
 },
 {
  "id": "q101",
  "number": 101,
  "type": "truefalse",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。誤っている場合は「いいえ」を選\n択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Azure Files は、Infrastructure as a Service(IaaS)の一例です。",
   "Azure 仮想マシンで稼働する DNS Server は、Platform as a Service(PaaS)の一例です。",
   "Microsoft Intune は Software as a Service(SaaS)の一例です。"
  ],
  "tfAnswers": [
   "いいえ",
   "いいえ",
   "はい"
  ],
  "review": "1.2「クラウドコンピューティングのサービスモデル」",
  "explanation": "Azure Files は、Azure ストレージアカウントのファイル共有サービスです。ストレージアカウントは PaaS のサ\nービスなので①の正解は「いいえ」です。\nまた、Azure 仮想マシンは IaaS サービスなので、②の正解は「いいえ」です。\nそして、Microsoft Intune はマイクロソフトのクラウドベースのエンドポイント管理ソリューションで、デバイス\nとアプリを管理することができます。したがって、③の正解は「はい」です。"
 },
 {
  "id": "q102",
  "number": 102,
  "type": "choice",
  "chapter": 0,
  "chapterName": "その他",
  "text": "あなたの会社は Azure サポートプランに加入する予定です。サポートプランでは、新しいサポートリクエスト\nを受け付けられるようにする必要があります。新しいサポートリクエストを可能にするサポートプランは次のう\nちどれですか？",
  "choices": [
   {
    "key": "A",
    "text": "Basic"
   },
   {
    "key": "B",
    "text": "Developer"
   },
   {
    "key": "C",
    "text": "Standard"
   },
   {
    "key": "D",
    "text": "Professional Direct"
   },
   {
    "key": "E",
    "text": "Premier"
   }
  ],
  "correctAnswers": [
   "A",
   "B",
   "C",
   "D"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "",
  "explanation": "参照：最新の試験情報ファイルの「サポートプラン」\nAzure には、現在提供しているサポートプランとして、「 Basic」、「 Developer」、「 Standard」、「 Professional\nDirect 」の 4 種類があります。新しいサポートリクエストは、すべてのプランで利用可能です。したがって、\nPremier 以外の４つが正解です。"
 },
 {
  "id": "q103",
  "number": 103,
  "type": "choice",
  "chapter": 4,
  "chapterName": "コンピューティングサービス",
  "text": "開発者は、Azure でホストする必要がある 10 個の Web アプリケーションを作成しました。Web アプリをホ\nストする App Service プランを決定する必要があります。App Service プランは、次の要件を満たす必要があ\nります。\n   Web アプリはカスタムドメインを使用します。\n各 Web アプリには 10GB のストレージが必要です。\n   Web アプリはそれぞれ専用のコンピューティングインスタンスで実行する必要があります。\nインスタンス間の負荷分散を含める必要があります。\nコストは最小限に抑える必要があります。\nどの Web 層プランを使用する必要がありますか？",
  "choices": [
   {
    "key": "A",
    "text": "Standard"
   },
   {
    "key": "B",
    "text": "Basic"
   },
   {
    "key": "C",
    "text": "Free"
   },
   {
    "key": "D",
    "text": "Shared"
   }
  ],
  "correctAnswers": [
   "B"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "4.1.3 「 Azure App Service」",
  "explanation": "カスタムドメイン、10GB 以上のストレージ、専用のインスタンス、インスタンス間の負荷分散をサポートしてい\nるのは Basic 以上です。したがって正解は B です。"
 },
 {
  "id": "q104",
  "number": 104,
  "type": "choice",
  "chapter": 4,
  "chapterName": "コンピューティングサービス",
  "text": "マイアミ支社のユーザー向けにポータル Web アプリを作成しました。この Web アプリは一般に公開され、マ\nイアミのユーザーが顧客情報や製品情報を取得するために使用します。Web アプリは現在、オンプレミスのテ\nスト環境で実行されています。 Azure で Web アプリをホストする予定です。 Web アプリをホストする App\nService プランを決定する必要があります。App Service プランは、次の要件を満たす必要があります。\n     Web サイトは「 miami.weyland.com」 URL を使用します。\n     Web サイトは 2 つのインスタンスに配置されます。\n     SSL サポートを含める必要があります。\n     Web サイトには 12GB のストレージが必要です。\nコストは最小限に抑える必要があります。\nどの Web 層プランを使用する必要がありますか？",
  "choices": [
   {
    "key": "A",
    "text": "Standard"
   },
   {
    "key": "B",
    "text": "Basic"
   },
   {
    "key": "C",
    "text": "Free"
   },
   {
    "key": "D",
    "text": "Shared"
   }
  ],
  "correctAnswers": [
   "A"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "4.1.3 「 Azure App Service」",
  "explanation": "カスタムドメイン、複数インスタンス、SSL サポートは「 Basic」以上でサポートしています。12GB 以上のストレー\nジをサポートしているのは、「 Standard」以上でサポートしています。したがって正解は A になります。"
 },
 {
  "id": "q105",
  "number": 105,
  "type": "choice",
  "chapter": 5,
  "chapterName": "ネットワークサービス",
  "text": "あなたの会社には、Microsoft Azure でホストされている仮想マシン（ VM ）があります。VM は、VNet1 とい\nう名前の単一の Azure 仮想ネットワークに配置されます。同社にはリモートで作業するユーザーがいます。リ\nモートワーカーは、VNet1 上の VM にアクセスする必要があります。リモートワーカーにアクセスを提供するに\nは何をしますか？",
  "choices": [
   {
    "key": "A",
    "text": "サイト間（ S2S） VPN を構成する"
   },
   {
    "key": "B",
    "text": "VNet 対 VNet 接続を構成する"
   },
   {
    "key": "C",
    "text": "ポイント対サイト（ P2S） VPN を構成する"
   },
   {
    "key": "D",
    "text": "Windows Server 2012 サーバーVM 上で DirectAccess を構成する"
   },
   {
    "key": "E",
    "text": "マルチサイト VPN を構成する"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "5.1.4 「オンプレミスネットワークとの接続」",
  "explanation": "VPN ゲートウェイを使用する「ポイント対サイト VPN 接続」を利用すると、インターネット上のユーザーは自\n分のデバイスを VPN で A zure の仮想ネットワークに接続することができます。"
 },
 {
  "id": "q106",
  "number": 106,
  "type": "choice",
  "chapter": 2,
  "chapterName": "Azureの基礎・コスト管理",
  "text": "同社は、 Azure Government を利用してクラウドソリューションを開発したいと考えています。 Azure\nGovernment は、特定の種類のクライアントのみが使用できます。Azure Government を利用できる顧客の種\n類は次のうちどれですか？すべて選択してください。",
  "choices": [
   {
    "key": "A",
    "text": "あらゆる国の政府請負業者"
   },
   {
    "key": "B",
    "text": "あらゆる国の政府機関"
   },
   {
    "key": "C",
    "text": "欧州政府の請負業者"
   },
   {
    "key": "D",
    "text": "欧州政府機関"
   },
   {
    "key": "E",
    "text": "米国政府の請負業者 F.    米国政府機関"
   }
  ],
  "correctAnswers": [
   "E"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "2.1.3 「特殊なリージョン」",
  "explanation": "Azure Government は、米国政府のコンプライアンスとセキュリティ要件を満たすために作られた特別なリ\nージョンです。利用できるのは、米国政府、州政府、地方自治体、およびそのパートナーのみが利用できます。"
 },
 {
  "id": "q107",
  "number": 107,
  "type": "choice",
  "chapter": 8,
  "chapterName": "ガバナンス・コンプライアンス・監視",
  "text": "問題文中の（）にあてはまるものを選択肢から選んでください。\nすべての Azure リソースに（）を割り当てることができます。",
  "choices": [
   {
    "key": "A",
    "text": "Blueprints"
   },
   {
    "key": "B",
    "text": "ロック"
   },
   {
    "key": "C",
    "text": "Policy"
   },
   {
    "key": "D",
    "text": "サービスエンドポイント"
   }
  ],
  "correctAnswers": [
   "B"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "8.1.2 「リソースロック」",
  "explanation": "リソースロックは、すべてのリソースに割り当てることができます。一方、Azure Blueprints、Azure Policy は\n直接リソースに割り当てることはできません。またサービスエンドポイントは、ストレージアカウントや Azure\nSQL Database など一部のサービスにのみ割り当てることができます。"
 },
 {
  "id": "q108",
  "number": 108,
  "type": "choice",
  "chapter": 0,
  "chapterName": "その他",
  "text": "Azure の Microsoft クラウド導入フレームワークの最初の段階は何ですか？",
  "choices": [
   {
    "key": "A",
    "text": "クラウドを採用する。"
   },
   {
    "key": "B",
    "text": "計画を立てる。"
   },
   {
    "key": "C",
    "text": "組織の準備を整える。"
   },
   {
    "key": "D",
    "text": "戦略を定義する。"
   }
  ],
  "correctAnswers": [
   "D"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "",
  "explanation": "参照：最新の試験情報ファイルの「 Azure 向けの Microsoft クラウド導入フレームワーク」\nAzure 向けの Microsoft クラウド導入フレームワークでは、クラウド導入の計画、実装、運用などのステージ\nごとにガイダンス、ツールが提供されており、これにより必要なタイミングで適切なガイダンスにアクセスできる\nようになっています。各ステージは、次のように構成されています。\n•ステージ 1：戦略\n•ステージ 2：計画 (プラン)\n•ステージ 3：準備完了 (Ready)\n•ステージ 4：移行\n•ステージ 5：イノベーション\n•ステージ 6：管理、ガバナンス、セキュリティ\nしたがって、Azure 向けの Microsoft クラウド導入フレームワークの最初の段階は戦略となるため、正解は A\nとなります。"
 },
 {
  "id": "q109",
  "number": 109,
  "type": "truefalse",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。\n誤っている場合は「いいえ」を選択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "クラウドコンピューティングを使用するには物理サーバーが必要です。",
   "クラウドコンピューティングを使用するにはインターネット接続が必要です。",
   "クラウドコンピューティングの容量を増やすコストは、オンプレミスのデータセンターのコンピューティングの容量を増やすコストよりも低くなります。"
  ],
  "tfAnswers": [
   "いいえ",
   "いいえ",
   "はい"
  ],
  "review": "1.1.1「クラウドコンピューティングとサービスモデル」",
  "explanation": "クラウドコンピューティングは、クラウドサービスプロバイダーが保有しているサーバー、ストレージ、ネットワ\nーク機器などをインターネット経由で利用できるサービスです。したがって①は「いいえ」です。\nただしクラウドコンピューティングへの接続には専用線を使用するサービス(ExpressRoute)があるため、イン\nターネット接続は必須ではありません。したがって②は「いいえ」です。\nそしてクラウドコンピューティングを利用すると、自社の設備投資の費用が不要なためオンプレミスのデー\nタセンターのコンピューティング容量を増やすコストよりも低くなります。したがって③は「はい」です。"
 },
 {
  "id": "q110",
  "number": 110,
  "type": "choice",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "問題文中の（）にあてはまるものを選択肢から選んでください。\nオンプレミスの Microsoft SQL Server にクエリを実行する Azure Web アプリは、（）クラウドの例です。",
  "choices": [
   {
    "key": "A",
    "text": "ハイブリッド"
   },
   {
    "key": "B",
    "text": "マルチベンダー"
   },
   {
    "key": "C",
    "text": "プライベート"
   },
   {
    "key": "D",
    "text": "パブリック"
   }
  ],
  "correctAnswers": [
   "A"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "1.1.3「クラウドモデルとは」",
  "explanation": "Azure の Web アプリからオンプレミスの Microsoft SQL Server にクエリを実行するということなので、オン\nプレミスとクラウドの両方を利用するハイブリッドクラウドが答えです。"
 },
 {
  "id": "q111",
  "number": 111,
  "type": "choice",
  "chapter": 5,
  "chapterName": "ネットワークサービス",
  "text": "Azure 仮想ネットワークの機能は何ですか？",
  "choices": [
   {
    "key": "A",
    "text": "リソースコスト分析"
   },
   {
    "key": "B",
    "text": "パケット検査"
   },
   {
    "key": "C",
    "text": "地理的冗長性"
   },
   {
    "key": "D",
    "text": "分離とセグメンテーション"
   }
  ],
  "correctAnswers": [
   "D"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "5.1.1「仮想ネットワークとサブネット」",
  "explanation": "仮想ネットワーク間は既定で通信できないようになっています。他の仮想マシンと通信させたくない場合は、\n異なる仮想ネットワークに仮想マシンを配置することで実現できます。したがって仮想ネットワークの機能は、\n分離とセグメンテーションです。"
 },
 {
  "id": "q112",
  "number": 112,
  "type": "choice",
  "chapter": 5,
  "chapterName": "ネットワークサービス",
  "text": "サイト間 VPN の機能は何ですか？",
  "choices": [
   {
    "key": "A",
    "text": "パブリックネットワーク上のコンピューターと企業ネットワークの間に安全な接続を提供します。"
   },
   {
    "key": "B",
    "text": "インターネットを経由しない Azure への専用プライベート接続を提供します。"
   },
   {
    "key": "C",
    "text": "オンプレミス VPN デバイスから Azure VPN ゲートウェイへの接続を提供します。"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "5.1.4「オンプレミスネットワークとの接続」",
  "explanation": "サイト間 VPN は、Azure の仮想ネットワークとオンプレミスのネットワークを VPN で接続する方法です。",
  "supplement": "サイト間（Site-to-Site）VPN は、会社のネットワークと Azure の仮想ネットワークを、暗号化したトンネルでつなぐ方法です。インターネット越しでも安全に、社内とクラウドを 1 つのネットワークのように扱えます。"
 },
 {
  "id": "q113",
  "number": 113,
  "type": "choice",
  "chapter": 8,
  "chapterName": "ガバナンス・コンプライアンス・監視",
  "text": "問題文中の（）にあてはまるものを選択肢から選んでください。\nApplication Insights は（）の機能です。",
  "choices": [
   {
    "key": "A",
    "text": "Azure Advisor"
   },
   {
    "key": "B",
    "text": "Azure Application Gateway"
   },
   {
    "key": "C",
    "text": "Azure Arc"
   },
   {
    "key": "D",
    "text": "Azure Monitor"
   }
  ],
  "correctAnswers": [
   "D"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "8.2.3「 Azure Monitor(モニター)」",
  "explanation": "Application Insights は Azure Monitor のサービスの１つで、Web アプリケーションを監視することができ\nます。"
 },
 {
  "id": "q114",
  "number": 114,
  "type": "choice",
  "chapter": 6,
  "chapterName": "ストレージサービス",
  "text": "問題文中の（）にあてはまるものを選択肢から選んでください。\nAzure Blob Storage は、（）です。",
  "choices": [
   {
    "key": "A",
    "text": "アプリケーション間でメッセージをキューに入れて確実に配信するためのデータストア"
   },
   {
    "key": "B",
    "text": "ネットワークドライブとしてマップできるファイル共有"
   },
   {
    "key": "C",
    "text": "非リレーショナル構造化データのキー/属性ストア"
   },
   {
    "key": "D",
    "text": "ビデオファイルやビットマップなどの非常に大きなオブジェクト用に最適化されたストレージサービス"
   }
  ],
  "correctAnswers": [
   "D"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "6.1.1「ストレージアカウントとは」",
  "explanation": "ストレージアカウントの Azure BLOB には、大きなサイズの画像ファイルや動画フィル、Excel ファイル、PDF フ\nァイル、圧縮ファイルなどのデータを格納できます。"
 },
 {
  "id": "q115",
  "number": 115,
  "type": "truefalse",
  "chapter": 3,
  "chapterName": "Azureの管理ツール・ガバナンス基礎",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。誤っている場合は「いいえ」を選択\nしてください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "クラウドサービスを管理するにはインターネット接続が必要です。",
   "クラウドサービスを管理するには、管理アプリをインストールする必要があります。",
   "最新の Web ブラウザーからクラウドサービスを管理できます。"
  ],
  "tfAnswers": [
   "はい",
   "いいえ",
   "はい"
  ],
  "review": "3.2.「 Azure の管理ツール」",
  "explanation": "Azure portal などで Azure を管理するには、インターネット接続が必要です。したがって①は「はい」です。\nAzure を管理するには、Web ブラウザーでアクセスする Azure portal や PowerShell で実行できる Azure\nPowerShell などを使用することができます。したがって②は「いいえ」です。\nAzure portal の推奨されるブラウザーは、最新バージョンの Microsoft Edge や Chrome などです。したが\nって③は「はい」です。"
 },
 {
  "id": "q116",
  "number": 116,
  "type": "choice",
  "chapter": 7,
  "chapterName": "ID・アクセス・セキュリティ",
  "text": "Azure サブスクリプションを持っています。セキュアスコアを確認する必要があります。何を使用すればいい\nですか？",
  "choices": [
   {
    "key": "A",
    "text": "Azure Monitor"
   },
   {
    "key": "B",
    "text": "Azure Advisor"
   },
   {
    "key": "C",
    "text": "ヘルプ+サポート"
   },
   {
    "key": "D",
    "text": "Microsoft Defender for Cloud"
   }
  ],
  "correctAnswers": [
   "D"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "7.2.3「 Microsoft Defender for Cloud」",
  "explanation": "Microsoft Defender for Cloud は、クラウドネイティブアプリケーション保護プラットフォーム(CNAPP)で、さ\nまざまなサイバー脅威や脆弱性からリソースを保護するのに役立ちます。Microsoft Defender for Cloud のセ\nキュアスコアは、Azure リソースの設定値をシステムによって自動的に評価し、数値化します。"
 },
 {
  "id": "q117",
  "number": 117,
  "type": "truefalse",
  "chapter": 5,
  "chapterName": "ネットワークサービス",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。誤っている場合は「いいえ」を選択\nしてください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "ネットワークセキュリティグループ（ NSG）は、既定ですべてのネットワークトラフィックをブロックします。",
   "アプリケーションセキュリティグループは、ネットワークセキュリティグループ（ NSG）規則の一部として指定できます。",
   "ネットワークセキュリティグループ（ NSG ）には、常に受信セキュリティ規則と送信セキュリティ規則が含まれます。"
  ],
  "tfAnswers": [
   "いいえ",
   "はい",
   "はい"
  ],
  "review": "5.1.2「ネットワークセキュリティグループ(ＮＳＧ )」",
  "explanation": "ネットワークセキュリティグループ(NSG)には、受信規則、送信規則ともに既定の規則が３つずつ含まれてお\nり、仮想ネットワーク内の通信やインターネットへの接続が許可されています。したがって①は「いいえ」が答え\nです。\nまたサブネット内の一部の仮想マシンに対してアクセスを許可したい場合は、アプリケーションセキュリティ\nグループを使用します。サブネット用の NSG の規則を作成する際に、宛先にアプリケーションセキュリティグル\nープを指定することで、サブネット内の一部の仮想マシンにのみアクセスを許可することができます。したがっ\nて②は「はい」が答えです。\nそして NSG を作成すると、既定で受信セキュリティ規則と送信セキュリティ規則が３つずつ構成されます。\nこの既定の規則は変更も削除もできません。したがって③は「はい」が答えです。"
 },
 {
  "id": "q119",
  "number": 119,
  "type": "choice",
  "chapter": 7,
  "chapterName": "ID・アクセス・セキュリティ",
  "text": "問題文中の（）にあてはまるものを選択肢から選んでください。\n（）により、ユーザーはシングルサインオン (SSO)を使用して複数のアプリケーションに対して認証できる\nようになります。",
  "choices": [
   {
    "key": "A",
    "text": "Azure のアプリケーションセキュリティグループ"
   },
   {
    "key": "B",
    "text": "Microsoft Entra ID"
   },
   {
    "key": "C",
    "text": "Azure Key Vault"
   },
   {
    "key": "D",
    "text": "Microsoft Defender for Cloud"
   }
  ],
  "correctAnswers": [
   "B"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "7.1.2「 Azure Active Directory(Microsoft Entra ID)」",
  "explanation": "Microsoft Entra ID(Azure AD)は、マイクロソフトのクラウドのセキュリティ基盤で、クラウドのアプリの認証\nを行います。認証されたユーザーは、シングルサインオン(SSO)で、複数のクラウドアプリにアクセスできます。"
 },
 {
  "id": "q120",
  "number": 120,
  "type": "truefalse",
  "chapter": 3,
  "chapterName": "Azureの管理ツール・ガバナンス基礎",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。誤っている場合は「いいえ」を選択\nしてください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Azure Policy を使用してリソースにタグを適用できます。",
   "同じ Azure リソースに複数のタグを追加できます。",
   "Azure リソースは、リソースが作成されるリソースグループからタグを継承します。"
  ],
  "tfAnswers": [
   "はい",
   "はい",
   "いいえ"
  ],
  "review": "3.5.4「タグの利用」",
  "explanation": "Azure Policy には、タグに関するさまざまなポリシー定義ファイルが用意されています。たとえば、「リソース\nグループからタグを継承する」ポリシーを使用すると、リソースグループに割り当てられているタグをリソース\nグループ内のリソースに割り当てることができます。したがって①は「はい」になります。\n１つのリソースに複数のタグを割り当てることができます。したがって②は「はい」になります。\nそして、リソースグループにタグが割り当てられていたとしても、リソースグループ内のリソースにはタグは継\n承しません。したがって③は「いいえ」になります。"
 },
 {
  "id": "q121",
  "number": 121,
  "type": "choice",
  "chapter": 7,
  "chapterName": "ID・アクセス・セキュリティ",
  "text": "問題文中の（）にあてはまるものを選択肢から選んでください。\n（）は、リソースへのアクセスを希望するユーザーまたはサービスの ID を確立するプロセスです。",
  "choices": [
   {
    "key": "A",
    "text": "認証"
   },
   {
    "key": "B",
    "text": "認可（承認）"
   },
   {
    "key": "C",
    "text": "条件付きアクセス"
   },
   {
    "key": "D",
    "text": "同期"
   }
  ],
  "correctAnswers": [
   "A"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "7.1.1「認証と認可 (承認 )」",
  "explanation": "認証とは、システムにアクセスしてくる利用者が「誰なのか」を確認するプロセスです。仮想マシンやアプリな\nどを Microsoft Entra ID(Azure Active Directo ry)に登録すると、仮想マシンやアプリなどに対しても認証を\n行うことができます。"
 },
 {
  "id": "q122",
  "number": 122,
  "type": "choice",
  "chapter": 0,
  "chapterName": "その他",
  "text": "問題文中の（）にあてはまるものを選択肢から選んでください。\nAzure 仮想マシンのステータスが「停止済み(割り当て解除 )」の場合、（）に対して引き続き料金を支払\nいます。",
  "choices": [
   {
    "key": "A",
    "text": "コンピューティング容量"
   },
   {
    "key": "B",
    "text": "I/O 操作"
   },
   {
    "key": "C",
    "text": "ネットワーキング"
   },
   {
    "key": "D",
    "text": "ストレージ"
   }
  ],
  "correctAnswers": [
   "D"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "",
  "explanation": "復習 3.5.1「 Azure のコストに与える要因について\nAzure の仮想マシンのコストは、主に仮想マシン(コンピューティング)の使用料金とストレージ料金で構成さ\nれています。仮想マシンが停止している間は、ストレージ料金のみ発生します。"
 },
 {
  "id": "q123",
  "number": 123,
  "type": "truefalse",
  "chapter": 2,
  "chapterName": "Azureの基礎・コスト管理",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。誤っている場合は「いいえ」を選択\nしてください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "会社で Azure の無料アカウントを使用している場合は、Azure サービスのサブセットのみを使用できます。",
   "すべての Azure 無料アカウントは、特定の期間後に期限切れになります。",
   "同じ Microsoft アカウントを使用して、最大 10 個の Azure 無料アカウントを作成できます。"
  ],
  "tfAnswers": [
   "はい",
   "はい",
   "いいえ"
  ],
  "review": "2.2.2「サブスクリプションの種類」",
  "explanation": "Azure 無料アカウントでは、使用できるサービスに制限があります。したがって①は「はい」になります。\n\f     また Azure 無料アカウントは、200 ドル相当分を 1 か月間無料で使用できるサブスクリプションです。クレジ\nットを使い切るか、1 カ月経過するとサービスが使用停止になります。したがって②は「はい」になります。\nそして１つの Microsoft アカウントで取得できる Azure 無料アカウントは１つです。したがって③は「いいえ」\nです。"
 },
 {
  "id": "q124",
  "number": 124,
  "type": "choice",
  "chapter": 3,
  "chapterName": "Azureの管理ツール・ガバナンス基礎",
  "text": "問題文中の（）にあてはまるものを選択肢から選んでください。\nWindows 10 を実行する未使用の Azure 仮想マシンのコストを節約するには、（）必要があります。",
  "choices": [
   {
    "key": "A",
    "text": "リモートデスクトップセッション中に仮想マシンを切断する"
   },
   {
    "key": "B",
    "text": "リモートデスクトップセッションから仮想マシンをスリープモードにする"
   },
   {
    "key": "C",
    "text": "Azure portal から仮想マシンの [停止 ] を選択する"
   },
   {
    "key": "D",
    "text": "リモートデスクトップセッションから仮想マシンをシャットダウンする"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "3.5.1「 Azure のコストに与える要因について」",
  "explanation": "使用していない仮想マシンのコストを削減するには、Azure portal から仮想マシンを停止します。すると、仮\n想マシンは「停止済み(割り当て解除 )」の状態になり、仮想マシンの利用代金が停止します。"
 },
 {
  "id": "q125",
  "number": 125,
  "type": "truefalse",
  "chapter": 3,
  "chapterName": "Azureの管理ツール・ガバナンス基礎",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。誤っている場合は「いいえ」を選択\nしてください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Azure からの送信トラフィックのコストは、すべての Azure リージョンで同じです。",
   "エンタープライズ契約（ EA）を通じて Azure サービスを購入するには、所定の金額を支払う必要があります。",
   "Microsoft は、Azure Marketplace を通じて販売されるすべてのサードパーティサービスの価格構造を定義します。"
  ],
  "tfAnswers": [
   "いいえ",
   "はい",
   "いいえ"
  ],
  "review": "3.5.1「 Azure のコストに与える要因について」、2.2.2「サブスクリプションの種類」",
  "explanation": "受信トラフィックは無料ですが、送信トラフィックは有料です。金額はリージョンによって異なります。したがって①は「いい\nえ」になります。\nまた EA(Enterprise Agreement)契約のサブスクリプションは、年間利用額を前払いする必要があります。したがっ\nて②は「はい」になります。\nマーケットプレイスは代理店モデルで運営されており、発行者が価格を設定し、 Microsof t が顧客に請求し、\nMicrosof t が代理店手数料を差し引いて発行者に収益を支払います。したがって③は「いいえ」になります。"
 },
 {
  "id": "q126",
  "number": 126,
  "type": "choice",
  "chapter": 3,
  "chapterName": "Azureの管理ツール・ガバナンス基礎",
  "text": "Azure Cloud Shell を起動する必要があります。何を使用すればいいですか？",
  "choices": [
   {
    "key": "A",
    "text": "Azure コマンドラインインターフェース（ CLI）"
   },
   {
    "key": "B",
    "text": "Azure portal"
   },
   {
    "key": "C",
    "text": "Azure PowerShell"
   },
   {
    "key": "D",
    "text": "Azure Resource Manager（ ARM）テンプレート"
   }
  ],
  "correctAnswers": [
   "B"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "3.2.4「 Azure Cloud Shell」",
  "explanation": "Azure Cloud Shell は Azure portal 内や Azure Mobile Apps 内でコマンドを実行できる環境です。"
 },
 {
  "id": "q127",
  "number": 127,
  "type": "choice",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "クラウドサービスが変化する要件に迅速に適応できるようにするものはどれですか？",
  "choices": [
   {
    "key": "A",
    "text": "高可用性"
   },
   {
    "key": "B",
    "text": "予測可能性"
   },
   {
    "key": "C",
    "text": "管理性"
   },
   {
    "key": "D",
    "text": "機敏性"
   }
  ],
  "correctAnswers": [
   "D"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "1.1.2「クラウドを利用するメリット」",
  "explanation": "クラウドを利用すると、ハードウェアなどの購入やセットアップ操作などが不要となり、管理ポータルからの操\n作で簡単にシステムが構築できます。これを機敏性 (Agility)とよびます。"
 },
 {
  "id": "q128",
  "number": 128,
  "type": "choice",
  "chapter": 4,
  "chapterName": "コンピューティングサービス",
  "text": "クラウド環境における垂直スケーリングの例はどれですか？",
  "choices": [
   {
    "key": "A",
    "text": "既存の Azure 仮想マシンに CPU を追加する"
   },
   {
    "key": "B",
    "text": "追加の Azure 仮想マシンの追加"
   },
   {
    "key": "C",
    "text": "追加の Azure Virtual Desktop セッションホストの追加"
   },
   {
    "key": "D",
    "text": "追加の Azure App Service インスタンスを自動的に追加する"
   }
  ],
  "correctAnswers": [
   "A"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "4.1.2「 Azure Virtual Machine Scale Sets」",
  "explanation": "クラウド環境における垂直スケーリングとは、仮想マシン単体の性能を増減させることです。これは CPU や\nメモリの性能を調整して、コンピューターのスペックを増減させることを意味します。"
 },
 {
  "id": "q129",
  "number": 129,
  "type": "truefalse",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。誤っている場合は「いいえ」を選\n択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "クラウドコンピューティングでは、オンプレミス展開よりも設備投資（ CAPEX）コストが低くなります。",
   "クラウドコンピューティングでは、オンプレミス展開と同じ構成オプションが提供されます。",
   "ビジネスに変化が必要な時にクラウドコンピューティングを拡張できます。"
  ],
  "tfAnswers": [
   "はい",
   "いいえ",
   "はい"
  ],
  "review": "1.1.2「クラウドを利用するメリット」",
  "explanation": "クラウドコンピューティングは、クラウドサービスプロバイダーが保有しているサーバー、ストレージ、ネットワ\nーク機器などをインターネット経由で利用できるサービスです。自社で用意する必要がないため、オンプレミス\n展開よりも設備投資 (CA PEX)が低くなります。したがって①は「はい」になります。\nクラウドコンピューティングでは、オンプレミスのような柔軟な構成はできません。したがって②は「いいえ」\nです。\nそして、クラウドコンピューティングは、管理ポータルから簡単に仮想マシンの台数を増やすなどスケーリン\nグが可能です。したがって③は「はい」になります。"
 },
 {
  "id": "q130",
  "number": 130,
  "type": "truefalse",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。誤っている場合は「いいえ」を選\n択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Azure Functions は、Platform as a Service（ PaaS）クラウドサービスモデルの一例です。",
   "Microsoft 365 は、Software as a Service（ SaaS）クラウドサービスモデルの一例です。",
   "Azure 仮想マシンは、Infrastructure as a Service（ IaaS）クラウドサービスモデルの一例です。"
  ],
  "tfAnswers": [
   "はい",
   "はい",
   "はい"
  ],
  "review": "1.2「クラウドコンピューティングのサービスモデル」",
  "explanation": "Azure Functions は、Azure 上で関数 (コード )をサーバーレスで実行できるサービスです。サーバーの構築や保守を\nすることなく、利用者はアプリケーション開発に集中することができます。したがって①は「はい」が正解です。\nまた Microsof t 365 では、Word や Excel などのアプリ、Exchange Online や Teams など業務で使用するさま\nざまなサービス利用できます。したがって②は「はい」が正解です。\nそして Azure 仮想マシンは、Azure の IaaS のサービスです。したがって③は「はい」が正解です。"
 },
 {
  "id": "q131",
  "number": 131,
  "type": "choice",
  "chapter": 6,
  "chapterName": "ストレージサービス",
  "text": "ジオ冗長ストレージ(GRS) を使用する Azure ストレージアカウントによって維持されるデータのコピーはいく\nつですか？",
  "choices": [
   {
    "key": "A",
    "text": "3"
   },
   {
    "key": "B",
    "text": "4"
   },
   {
    "key": "C",
    "text": "6"
   },
   {
    "key": "D",
    "text": "9"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "6.1.3「ストレージアカウントの冗長化オプション」",
  "explanation": "GRS は、別のリージョンにレプリカを作成します。主となるプライマリリージョンに３つのレプリカ、そしてセカ\nンダリリージョンに３つのレプリカを作成するため、合計 6 つのデータコピーを保持します。"
 },
 {
  "id": "q132",
  "number": 132,
  "type": "choice",
  "chapter": 7,
  "chapterName": "ID・アクセス・セキュリティ",
  "text": "Azure Virtual Desktop リソースにアクセス許可を付与するには何が使用されますか？",
  "choices": [
   {
    "key": "A",
    "text": "タグ"
   },
   {
    "key": "B",
    "text": "ロールベースのアクセス制御の（ RBAC）ロール"
   },
   {
    "key": "C",
    "text": "リソースグループ"
   },
   {
    "key": "D",
    "text": "アプリケーションセキュリティグループ"
   }
  ],
  "correctAnswers": [
   "B"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "7.1.6「 Azure のアクセス管理」",
  "explanation": "Azure Virtual Desktop に限らず、Azure のリソースにアクセス許可 (権限 )を割り当てるには、ロールベース\nのアクセス制御 (RBAC)でロールを割り当てます。"
 },
 {
  "id": "q135",
  "number": 135,
  "type": "choice",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "顧客の管理責任を最小限に抑えるクラウドサービスモデルはどれですか？",
  "choices": [
   {
    "key": "A",
    "text": "Infrastructure as a Service（ IaaS）"
   },
   {
    "key": "B",
    "text": "Platform as a Service（ PaaS）"
   },
   {
    "key": "C",
    "text": "Software as a Service（ SaaS）"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "1.2「クラウドコンピューティングのサービスモデル」",
  "explanation": "Infrastructure as a Service(IaaS)では、顧客が管理責任を負うのは、OS、ミドルウェア、アプリケーション、\nデータです。そして、Platform as a Service(PaaS) では、顧客が管理責任を負うのはアプリケーション、データ\nです。また Software as a Service(SaaS)では、顧客が責任を負うのはデータのみです。しがって顧客の管理\n責任が最小限になるのは SaaS です。"
 },
 {
  "id": "q137",
  "number": 137,
  "type": "choice",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "問題文中の（）にあてはまるものを選択肢から選んでください。\n（）で独自のインフラストラクチャーをホストする組織は、データセンターを必要としなくなりました。",
  "choices": [
   {
    "key": "A",
    "text": "プライベートクラウド"
   },
   {
    "key": "B",
    "text": "ハイブリッドクラウド"
   },
   {
    "key": "C",
    "text": "パブリッククラウド"
   },
   {
    "key": "D",
    "text": "Hyper-V ホスト上"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "1.1.3「クラウドモデルとは」",
  "explanation": "パブリッククラウドは、クラウドサービスプロバイダーが提供するハードウェアを利用する形態で、一般的に\n複数の組織がリソース(ハードウェア)を共有することで安価に利用する事ができます。"
 },
 {
  "id": "q138",
  "number": 138,
  "type": "choice",
  "chapter": 6,
  "chapterName": "ストレージサービス",
  "text": "問題文中の（）にあてはまるものを選択肢から選んでください。\nPremium ブロック BLOB ストレージアカウントは、（）冗長性のみをサポートします。",
  "choices": [
   {
    "key": "A",
    "text": "ジオ冗長ストレージ（ GRS）"
   },
   {
    "key": "B",
    "text": "ジオゾーン冗長ストレージ（ GZRS）"
   },
   {
    "key": "C",
    "text": "ローカル冗長ストレージ（ LRS）"
   },
   {
    "key": "D",
    "text": "ゾーン冗長ストレージ（ ZRS）"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "6.1.2「ストレージアカウントのパフォーマンスと種類」、6.1.3「ストレージアカウントの冗長化オプション」",
  "explanation": "ストレージアカウントの種類で Premium ブロック BLOB を選択すると、冗長化オプションでは「ローカル冗長\nストレージ(LRS)」または「ゾーン冗長ストレージ(ZR S)」を利用できます。しかし、ZRS は一部のリージョンでのみ\n利用可能なオプションなので、ここでは C のローカル冗長ストレージ(LRS)が正解となります。"
 },
 {
  "id": "q139",
  "number": 139,
  "type": "choice",
  "chapter": 3,
  "chapterName": "Azureの管理ツール・ガバナンス基礎",
  "text": "Azure Web アプリがあります。 Web アプリの設定は iPhone から管理する必要があります。使用できる\nAzure 管理ツールはどれですか？ 2 つ選択してください。",
  "choices": [
   {
    "key": "A",
    "text": "Windows PowerShell"
   },
   {
    "key": "B",
    "text": "Azure Cloud Shell"
   },
   {
    "key": "C",
    "text": "Azure portal"
   },
   {
    "key": "D",
    "text": "Azure Storage Explorer"
   }
  ],
  "correctAnswers": [
   "B",
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "3.2.1「 Azure portal」、3.2.4「 Azure Cloud Shell」",
  "explanation": "iPhone などモバイルデバイスで Azure のリソースを管理するには次の方法があります。\n・ Azure Mobile Apps を使用する\n・ Safari などのブラウザーを使用して Azure portal にアクセスする\n・ Azure Mobile Apps、Azure portal で Cloud Shell を起動しコマンドやスクリプトを実行する"
 },
 {
  "id": "q140",
  "number": 140,
  "type": "choice",
  "chapter": 8,
  "chapterName": "ガバナンス・コンプライアンス・監視",
  "text": "ロックが削除された場合、リソースロックを自動的に置き換えることができるサービスはどれですか？",
  "choices": [
   {
    "key": "A",
    "text": "Azure Information Protection（ AIP）"
   },
   {
    "key": "B",
    "text": "Azure Blueprints"
   },
   {
    "key": "C",
    "text": "Azure Backup"
   },
   {
    "key": "D",
    "text": "Azure Advisor"
   }
  ],
  "correctAnswers": [
   "B"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "8.1.3「 Azure Blueprints（ブループリント）」",
  "explanation": "Azure Blueprints では、ロックが削除された場合にリソースロックを自動的に置き換えることができます。リ\nソースが Azure Blueprints に関連付けられている場合、リソースに割り当てられていたロックが削除されると、\nAzure Blueprints はロックを自動的に置き換えてリソースを保護できます。"
 },
 {
  "id": "q142",
  "number": 142,
  "type": "choice",
  "chapter": 2,
  "chapterName": "Azureの基礎・コスト管理",
  "text": "問題文中の（）にあてはまるものを選択肢から選んでください。\nAzure SLA は、（）を定義する、Microsoft と顧客の間の正式な契約です。",
  "choices": [
   {
    "key": "A",
    "text": "テクノロジーロードマップに基づいて機能を提供するというコミットメント"
   },
   {
    "key": "B",
    "text": "パフォーマンス標準への取り組み"
   },
   {
    "key": "C",
    "text": "利用可能なインフラストラクチャーの最大スケーラビリティ制限"
   },
   {
    "key": "D",
    "text": "利用可能なインフラストラクチャーの最小スケーラビリティ制限"
   }
  ],
  "correctAnswers": [
   "B"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "2.2.4 「サービスレベルアグレ―メント(SLA)」",
  "explanation": "Microsoft Azure では、提供されるクラウドサービスのサービス水準を明確にするために、サービスレベルア\nグリーメント(SLA)が定められています。SLA は主に月間稼働率がサービス水準として設定されています。"
 },
 {
  "id": "q143",
  "number": 143,
  "type": "choice",
  "chapter": 3,
  "chapterName": "Azureの管理ツール・ガバナンス基礎",
  "text": "Azure リソースのコストを追跡するには何を使用する必要がありますか？",
  "choices": [
   {
    "key": "A",
    "text": "Azure クイックスタートテンプレート"
   },
   {
    "key": "B",
    "text": "タグ"
   },
   {
    "key": "C",
    "text": "予算"
   },
   {
    "key": "D",
    "text": "使用量とクォーター"
   }
  ],
  "correctAnswers": [
   "B"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "3.5.4「タグの利用」",
  "explanation": "タグとは、Azure のリソースやリソースグループ等に情報を設定するためのサービスです。コスト分析ツール\nや請求書で、タグによる料金の絞り込みができます。これによりプロジェクトごとや部署ごとなど、特定のグル\nープごとに料金を計算することができます。"
 },
 {
  "id": "q144",
  "number": 144,
  "type": "choice",
  "chapter": 2,
  "chapterName": "Azureの基礎・コスト管理",
  "text": "Azure サブスクリプションを持っています。仮想マシンを作成する予定です。仮想マシンは Azure のどこに配\n置されますか？",
  "choices": [
   {
    "key": "A",
    "text": "ストレージアカウント内"
   },
   {
    "key": "B",
    "text": "リソースグループ内"
   },
   {
    "key": "C",
    "text": "管理単位内"
   },
   {
    "key": "D",
    "text": "アプリケーショングループ内"
   }
  ],
  "correctAnswers": [
   "B"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "2.3.1「リソースとリソースグループ」",
  "explanation": "Azure に作成する仮想マシンなどのリソースは、リソースグループに作成します。",
  "supplement": "リソースグループは、VM・ストレージ・DB など関連するリソースをまとめて入れる「フォルダ」のようなものです。まとめて削除したり、まとめて権限を付けたりできます。Azure のリソースは必ずどれかのリソースグループに属します。",
  "diagram": "resource-hierarchy"
 },
 {
  "id": "q145",
  "number": 145,
  "type": "choice",
  "chapter": 8,
  "chapterName": "ガバナンス・コンプライアンス・監視",
  "text": "問題文中の（）にあてはまるものを選択肢から選んでください。\n（）は、Azure サービス、リージョン、および特定のリソースの状態のグローバルビューを提供します。",
  "choices": [
   {
    "key": "A",
    "text": "Application Insights"
   },
   {
    "key": "B",
    "text": "Azure Advisor"
   },
   {
    "key": "C",
    "text": "Azure Service Health"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "8.2.2「 Azure Service Health(サービス正常性 )」",
  "explanation": "Azure Service Health(サービス正常性 )は、Azure リージョンのサービスごとの障害状況や計画メンテナン\nスの予定、サービスに影響するイベントなどに関する情報を提供します。"
 },
 {
  "id": "q146",
  "number": 146,
  "type": "choice",
  "chapter": 3,
  "chapterName": "Azureの管理ツール・ガバナンス基礎",
  "text": "あなたの会社には、複数のリソースが含まれる Azure サブスクリプションがあります。各リソースのコストを\nどの部門が担当するかを特定する必要があります。何を使用すればいいですか？",
  "choices": [
   {
    "key": "A",
    "text": "予算"
   },
   {
    "key": "B",
    "text": "アラート"
   },
   {
    "key": "C",
    "text": "タグ"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "3.5.4「タグの利用」",
  "explanation": "タグは、 Azure のリソースやリソースグループ等に情報を設定するためのサービスです。タグを利用すると、\nAzure 料金の絞り込みができます。請求書などで特定の部門のタグのリソースのみを表示するようにフィルタ\nーをかけることができます。"
 },
 {
  "id": "q147",
  "number": 147,
  "type": "truefalse",
  "chapter": 6,
  "chapterName": "ストレージサービス",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。誤っている場合は「いいえ」を選\n択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "同じ Azure サブスクリプション内に同じ名前の 2 つの Azure ストレージアカウントを持つことができます。",
   "異なる Azure リージョンで同じ名前の 2 つの Azure ストレージアカウントを持つことができます。",
   "2 つの異なる Azure サブスクリプションで、同じ名前の 2 つの Azure ストレージアカウントを持つことができます。"
  ],
  "tfAnswers": [
   "いいえ",
   "いいえ",
   "いいえ"
  ],
  "review": "6.1.4「ストレージアカウントとは」",
  "explanation": "ストレージアカウントを作成すると URL が生成され、世界中のどこからでも HTTP や HTTPS でアクセスできま\nす。生成される URL にストレージアカウント名が使用されるため、ストレージアカウントには Azure で一意な名\n前を割り当てる必要があります。したがって、①、②および③はすべて「いいえ」になります。"
 },
 {
  "id": "q148",
  "number": 148,
  "type": "choice",
  "chapter": 3,
  "chapterName": "Azureの管理ツール・ガバナンス基礎",
  "text": "Windows Server を実行するオンプレミスサーバーがあります。Azure portal を使用してサーバーを管理す\nるには、何を実装しますか？",
  "choices": [
   {
    "key": "A",
    "text": "Azure Kubernetes Service（ AKS）"
   },
   {
    "key": "B",
    "text": "Azure Arc"
   },
   {
    "key": "C",
    "text": "Docker"
   },
   {
    "key": "D",
    "text": "ロールベースのアクセス制御（ RBAC）"
   }
  ],
  "correctAnswers": [
   "B"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "3.4.1「 Azure Arc とは」",
  "explanation": "Azure Arc は、ハイブリッドクラウドおよびマルチクラウド環境の管理を A zure に統合するサービスです。\nAzure Arc を使用すると、Azure の外にあるオンプレミスのサーバーや仮想マシン、Azure 以外のクラウドサー\nビスをあたかも Azure のリソースかのように Azure portal で管理できます。"
 },
 {
  "id": "q149",
  "number": 149,
  "type": "choice",
  "chapter": 3,
  "chapterName": "Azureの管理ツール・ガバナンス基礎",
  "text": "問題文中の（）にあてはまるものを選択肢から選んでください。\nWindows Ser ver または Microsof t S QL Server のライセンスが（）の対象となっている場合は、Azure 仮\n想マシンでライセンスを再利用できます。",
  "choices": [
   {
    "key": "A",
    "text": "エンドユーザー使用許諾契約 (EULA)"
   },
   {
    "key": "B",
    "text": "Microsof t ライフサイクルポリシー"
   },
   {
    "key": "C",
    "text": "ソフトウェアアシュアランス"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "3.5.1「 Azure のコストに与える要因について」",
  "explanation": "ソフトウェアアシュアランス契約 (SA 契約 )付きのマイクロソフト製品を利用していると、マイクロソフトからさ\nまざまな特典を受けることができます。その１つが Azure ハイブリッド特典です。Azure ハイブリッド特典とは、\nWindows や SQL Server などのソフトウェアライセンスを Azure に持ち込むことができる Azure の割引制度\nです。仮想マシンのコストには、Windows Server などのライセンス料金が含まれるため、仮想マシンを作成す\nる際に Azure ハイブリッド特典を有効にするとその分の料金の割引を受けることができます。"
 },
 {
  "id": "q150",
  "number": 150,
  "type": "choice",
  "chapter": 8,
  "chapterName": "ガバナンス・コンプライアンス・監視",
  "text": "Azure で実行される Web アプリがあります。Web ページがユーザーのブラウザーに読み込まれるのにかか\nる時間を特定する必要があります。何を使用すればいいですか？",
  "choices": [
   {
    "key": "A",
    "text": "Azure Monitor アラート"
   },
   {
    "key": "B",
    "text": "Azure Monitor の Application Insights"
   },
   {
    "key": "C",
    "text": "Log Analytics"
   },
   {
    "key": "D",
    "text": "Azure Network Watcher"
   }
  ],
  "correctAnswers": [
   "B"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "8.2.3「 Azure Monitor(モニター)」",
  "explanation": "Azure Monitor の Application Insights で、Web アプリケーションを監視することができます。"
 },
 {
  "id": "q151",
  "number": 151,
  "type": "choice",
  "chapter": 3,
  "chapterName": "Azureの管理ツール・ガバナンス基礎",
  "text": "デスクトップアプリケーションは、 Azure と対話しリソースを管理するために何を使用する必要があります\nか？",
  "choices": [
   {
    "key": "A",
    "text": "API"
   },
   {
    "key": "B",
    "text": "Azure Resource Manager（ ARM）テンプレート"
   },
   {
    "key": "C",
    "text": "Azure コマンドラインインターフェース（ CLI）"
   },
   {
    "key": "D",
    "text": "Azure Cloud Shell"
   }
  ],
  "correctAnswers": [
   "A"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "3.1.1「 Azure Reso urce Manager とは」",
  "explanation": "Azure Resource Manager は、Azure リソースへの操作に対する管理役割を担います。Azure に対して作成\nや削除などの操作を行うと、必ず Azure Resource Manager を経由して操作が行われます。各ツールからの\n命令は API を介して Azure Resource Manager へ送られます。"
 },
 {
  "id": "q152",
  "number": 152,
  "type": "choice",
  "chapter": 8,
  "chapterName": "ガバナンス・コンプライアンス・監視",
  "text": "Azure Monitor と統合できる機能またはサービスはどれですか︖ 2 つ選択してください。",
  "choices": [
   {
    "key": "A",
    "text": "Azure ステータス（ Azure の状態）"
   },
   {
    "key": "B",
    "text": "Application Insights"
   },
   {
    "key": "C",
    "text": "Azure Advisor"
   },
   {
    "key": "D",
    "text": "Log Analytics"
   },
   {
    "key": "E",
    "text": "Azure Service Health"
   }
  ],
  "correctAnswers": [
   "B",
   "D"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "8.2.3「 Azure Monitor(モニター)」",
  "explanation": "Azure Monitor は Azure の監視用のサービスです。Azure Monitor の Application Insights を使用すると\nWeb アプリケーションの監視ができ、Log Analytics を使用するとログを分析することができます。"
 },
 {
  "id": "q153",
  "number": 153,
  "type": "choice",
  "chapter": 3,
  "chapterName": "Azureの管理ツール・ガバナンス基礎",
  "text": "Azure Resource Manager（ ARM）で非 Azure リソースをプロジェクト化し、管理するための統一された方\n法を提供するものは何ですか？",
  "choices": [
   {
    "key": "A",
    "text": "Azure Migrate"
   },
   {
    "key": "B",
    "text": "Azure AD Connect"
   },
   {
    "key": "C",
    "text": "Azure Arc"
   },
   {
    "key": "D",
    "text": "Azure Front Door"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "3.4.1「 Azure Arc とは」",
  "explanation": "Azure Arc は、ハイブリッドクラウドおよびマルチクラウド環境の管理を A zure に統合するサービスです。\nAzure Arc を使用すると、Azure の外にあるオンプレミスのサーバーや仮想マシン、Azure 以外のクラウドサー\nビスをあたかも Azure のリソースかのように Azure portal で管理できます。"
 },
 {
  "id": "q154",
  "number": 154,
  "type": "choice",
  "chapter": 3,
  "chapterName": "Azureの管理ツール・ガバナンス基礎",
  "text": "あなたの会社には Azure サブスクリプションと 3 つのビジネスユニットがあります。ビジネスユニットごとに\n新しいリソースを展開することを計画しています。同じ構成を各リソースに適用する反復可能で信頼性の高\nい方法を使用して、新しいリソースが展開されていることを確認する必要があります。何を使用すればいいで\nすか？",
  "choices": [
   {
    "key": "A",
    "text": "Azure Policy"
   },
   {
    "key": "B",
    "text": "Azure Arc"
   },
   {
    "key": "C",
    "text": "リソースグループ"
   },
   {
    "key": "D",
    "text": "Azure Resource Manager（ ARM）テンプレート"
   }
  ],
  "correctAnswers": [
   "D"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "3.3.1「 ARM テンプレート」",
  "explanation": "ARM テンプレートとは、リソースの作成や構成に使用できるテンプレートファイルです。ARM テンプレートを\n使用すると、テンプレートに定義したとおりのリソースが、常に「正確」に「一貫性」のある状態で作成、構成さ\nれます。繰り返し、同じ構成のリソースを作成した時に便利です。"
 },
 {
  "id": "q155",
  "number": 155,
  "type": "truefalse",
  "chapter": 5,
  "chapterName": "ネットワークサービス",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。誤っている場合は「いいえ」を選択\nしてください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "ExpressRoute は Border Gateway Protocol（ BGP）を使用します。",
   "ExpressRoute はインターネットを使用してオンプレミスネットワークを Azure に接続します。",
   "複数の ExpressRoute 回線を構成して、オンプレミスのデータセンターを Azure に接続できます。"
  ],
  "tfAnswers": [
   "はい",
   "いいえ",
   "はい"
  ],
  "review": "5.1.4「オンプレミスネットワークとの接続」",
  "explanation": "ExpressRoute とは、マイクロソフトとオンプレミスのネットワークを専用線で接続するサービスで、オンプレ\nミスのデータセンターと Azure の仮想ネットワークを接続することができます。 ExpressRoute では、Border\nGateway Protocol(BGP)を使用して、接続プロバイダーと経路情報を交換します。したがって①は「はい」にな\nります。\nまた、ExpressRoute は専用線を使用して接続するサービスであるため、②は「いいえ」になります。\nそして、Azure では１つのサブスクリプションで、複数の ExpressRoute 回線を利用できます。既定の上限は\n50 に設定されています。したがって③は「はい」になります。"
 },
 {
  "id": "q156",
  "number": 156,
  "type": "truefalse",
  "chapter": 3,
  "chapterName": "Azureの管理ツール・ガバナンス基礎",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。誤っている場合は「いいえ」を選択\nしてください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Azure Arc は Linux を実行する物理サーバーを管理できます。",
   "Azure Arc は、Azure Kubernetes Service（ AKS）クラスターを大規模に管理できます。",
   "Azure Arc は、Azure の外部でホストされているサードパーティのデータベースソリューションを管理できます。"
  ],
  "tfAnswers": [
   "はい",
   "はい",
   "はい"
  ],
  "review": "3.4.1「 Azure Arc とは」",
  "explanation": "Azure Arc は、ハイブリッドクラウドおよびマルチクラウド環境の管理を A zure に統合するサービスです。\nAzure Arc は Linux を実行する物理サーバーを管理できます。したがって①は「はい」になります。\nまた、Azure Arc は Azure Kubernetes Service(AKS)クラスターを管理することができるため、②は「はい」\nになります。\nそして Azure Arc は外部でホストされているサードパーティのデータベースソリューションも管理できるため、\n③も「はい」が答えになります。"
 },
 {
  "id": "q157",
  "number": 157,
  "type": "choice",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "Software as a Service（ SaaS）クラウドサービスでは、Microsoft と顧客の間で共同で責任が分担されるの\nはどれですか？",
  "choices": [
   {
    "key": "A",
    "text": "ID とディレクトリのインフラストラクチャー管理"
   },
   {
    "key": "B",
    "text": "アプリケーション管理"
   },
   {
    "key": "C",
    "text": "情報とデータの管理"
   },
   {
    "key": "D",
    "text": "オペレーティングシステムのアップデート"
   }
  ],
  "correctAnswers": [
   "A"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "1.2.3「 SaaS(Software as a Service)」",
  "explanation": "SaaS は、インターネット経由でアプリを利用できるサービスです。アプリケーション管理やオペレーティングシ\nステムのアップデートはクラウドサービス事業者が責任を負います。SaaS サービスを利用する際の情報やデー\nタの管理は、利用者側が責任を負います。ID やディレクトリインフラストラクチャについては、ユーザーID のパ\nスワードを例に取ると、利用者・クラウドサービス事業者ともに漏洩しないよう注意を払って管理をする必要\nがあります。したがって、答えは A です。"
 },
 {
  "id": "q158",
  "number": 158,
  "type": "choice",
  "chapter": 8,
  "chapterName": "ガバナンス・コンプライアンス・監視",
  "text": "Azure Monitor は、イベントデータをどこに保存しますか？",
  "choices": [
   {
    "key": "A",
    "text": "Azure BLOB ストレージアカウント"
   },
   {
    "key": "B",
    "text": "Azure Queue"
   },
   {
    "key": "C",
    "text": "Azure SQL Database"
   },
   {
    "key": "D",
    "text": "Log Analytics ワークスペース"
   }
  ],
  "correctAnswers": [
   "D"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "8.2.3「 Azure Monitor(モニター)」",
  "explanation": "Azure Monitor のログを Log Analytics ワークスペースに保存すると、クエリーによるデータ検索や、アラ\nートによる通知、各種情報の視覚化などに活用できます。したがって、答えは D です。"
 },
 {
  "id": "q159",
  "number": 159,
  "type": "choice",
  "chapter": 2,
  "chapterName": "Azureの基礎・コスト管理",
  "text": "（）にあてはまる選択肢として正しいものを選択してください。\nAzure リソースを展開します。サービス停止のため、リソースは長期間利用できなくなります。Microsoft は\n（）。",
  "choices": [
   {
    "key": "A",
    "text": "お客様の銀行口座に返金します"
   },
   {
    "key": "B",
    "text": "リソースを別のサブスクリプションに移行します"
   },
   {
    "key": "C",
    "text": "Azure アカウントにクレジットを付与します"
   },
   {
    "key": "D",
    "text": "Azure クレジットと引き換えられるクーポンコードが送信されます"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "2.2.4「サービスレベルアグリーメント(SLA)」",
  "explanation": "Microsoft Azure の多くの有償サービスでは SLA によってサービス品質のコミットメントがなされています。\n利用者の申告によって規定の品質を提供できなかったことが確認できた場合、マイクロソフト社は、A zure ア\nカウントに利用料として充当できるサービスクレジットを利用者に付与します。したがって、正解は C です。"
 },
 {
  "id": "q160",
  "number": 160,
  "type": "choice",
  "chapter": 3,
  "chapterName": "Azureの管理ツール・ガバナンス基礎",
  "text": "Azure 管理者は、Azure リソースを作成する PowerShell スクリプトを実行することを計画しています。スク\nリプトの実行に使用するコンピューター構成を推奨する必要があります。スクリプトを実行できるコンピュータ\nーはどれですか？ 3 つ選択してください。",
  "choices": [
   {
    "key": "A",
    "text": "Windows 11 を実行し、Azure CLI ツールがインストールされているコンピューター"
   },
   {
    "key": "B",
    "text": "Linux を実行し、Azure CLI ツールがインストールされているコンピューター"
   },
   {
    "key": "C",
    "text": "macOS を実行し、PowerShell Core 6.0 がインストールされているコンピューター"
   },
   {
    "key": "D",
    "text": "Chrome OS を実行し、A zure Cloud Shell を使用するコンピューター"
   },
   {
    "key": "E",
    "text": "Windows 10 を実行し、Azure PowerShell モジュールがインストールされているコンピューター"
   }
  ],
  "correctAnswers": [
   "A",
   "D",
   "E"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "3.2.2「 Azure PowerShell」",
  "explanation": "Azure を操作する PowerShell スクリプトを実行するには、コンピューターに Azure PowerShell モジュール、\nもしくは PowerShell バージョン 7 以降をインストールする必要があります。Window11 のコンピューターには\nPowerShell がプリインストールされています。また、Azure Cloud Shell を用いれば、PowerShell スクリプトを\n実行できますが、Azure CLI ツールでは Azure PowerShell は実行できません。したがって、答えは A、D、E で\nす。"
 },
 {
  "id": "q161",
  "number": 161,
  "type": "truefalse",
  "chapter": 7,
  "chapterName": "ID・アクセス・セキュリティ",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。誤っている場合は「いいえ」を選択\nしてください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Microsoft Entra ID には、Azure 仮想マシン上のドメインコントローラーが必要です。",
   "Microsoft Entra ID は、A zure と Microsoft 365 の認証サービスを提供します。",
   "Microsoft Entra ID の各ユーザーアカウントには、Microsoft 365 ライセンスを 1 つだけ割り当てることができます。"
  ],
  "tfAnswers": [
   "いいえ",
   "はい",
   "いいえ"
  ],
  "review": "7.1.1「認証と認可 (承認 )」、7.1.5「 Azure Active Directory(Microsoft Entra ID)のライセンスと",
  "explanation": "主な機能」\nMicrosoft Entra ID は、ドメインコントローラーとユーザーを同期するしくみはありますが、同期は必須では\nないため、①の答えは「いいえ」です。Microsoft Entra ID は Azure や Microsoft365 に認証を提供しますので、\n②は「はい」です。Microsoft Entra ID のユーザーには、Microsoft365 ライセンスをはじめとするさまざまなラ\nイセンスを割り当てることができます。したがって、③は「いいえ」です。"
 },
 {
  "id": "q162",
  "number": 162,
  "type": "choice",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "Infrastructure as a Service（ IaaS）クラウドサービスモデルにおいて、クラウドサービスプロバイダーの責任となるコンポ\nーネントはどれですか？ 2 つ選択してください。",
  "choices": [
   {
    "key": "A",
    "text": "ストレージの構成とメンテナンス"
   },
   {
    "key": "B",
    "text": "オペレーティングシステムのインストールと構成"
   },
   {
    "key": "C",
    "text": "ハードウェアのメンテナンス"
   },
   {
    "key": "D",
    "text": "ネットワーク構成"
   },
   {
    "key": "E",
    "text": "データセンターインフラストラクチャーの物理的セキュリティ"
   }
  ],
  "correctAnswers": [
   "C",
   "E"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "1.2.1「 IaaS(Infrastructure as a Service )」",
  "explanation": "IaaS サービスでは、クラウド事業者はデータセンターのハードウェアやデータセンターの物理的なセキュリテ\nィに責任を負います。したがって、答えは C と E です。"
 },
 {
  "id": "q163",
  "number": 163,
  "type": "choice",
  "chapter": 6,
  "chapterName": "ストレージサービス",
  "text": "（）にあてはまる選択肢として正しいものを選択してください。\nクールアクセス層は、（）に最適化されています。",
  "choices": [
   {
    "key": "A",
    "text": "アクセス頻度が低く、少なくとも 30 日間保存されるデータ用"
   },
   {
    "key": "B",
    "text": "めったにアクセスされず、少なくとも 180 日間保存され、柔軟な遅延要件を持つデータ用"
   },
   {
    "key": "C",
    "text": "頻繁にアクセスされるデータを保存するため"
   }
  ],
  "correctAnswers": [
   "A"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "6.1.5「 BLOB のアクセス層」",
  "explanation": "BLOB のアクセス層を適切に設定すると、Azure の利用料金を最適化（節約）できます。30 日程度アクセス\nしないデータの保存に向くのは「クール層」です。180 日以上アクセスせず、アクセスが必要となった際に時間\n的猶予があるデータは「アーカイブ層」に配置することが推奨されます。したがって、答えは A です。"
 },
 {
  "id": "q164",
  "number": 164,
  "type": "choice",
  "chapter": 8,
  "chapterName": "ガバナンス・コンプライアンス・監視",
  "text": "（）にあてはまる選択肢として正しいものを選択してください。\n（）は、Azure サービスとリージョンの正常性の概要を提供します。",
  "choices": [
   {
    "key": "A",
    "text": "Azure Monitor"
   },
   {
    "key": "B",
    "text": "Azure Resource Health"
   },
   {
    "key": "C",
    "text": "Azure Service Health"
   },
   {
    "key": "D",
    "text": "Azure ステータス（ Azure の状態）"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "8.2.2「 Azure Service Health（サービス正常性）」",
  "explanation": "Azure Service Health を用いると、Azure リージョンのサービスごとの障害状況や計画メンテナンスの予定を確認で\nきます。したがって、答えは C です。"
 },
 {
  "id": "q165",
  "number": 165,
  "type": "truefalse",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。誤っている場合は「いいえ」を選\n択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Platform as a Service（ PaaS）クラウドサービスの場合、オペレーティングシステムの更新は顧客の責任となります。",
   "Infrastructure as a Service（ IaaS）クラウドサービスの場合、ネットワーク制御はマイクロソフトの責任です。",
   "Software as a Service（ SaaS）クラウドサービスの場合、ID 管理は顧客とマイクロソフトの共同責任です。"
  ],
  "tfAnswers": [
   "いいえ",
   "いいえ",
   "はい"
  ],
  "review": "1.2.1 「 IaaS(Infrastructure as a Service ) 」、 1.2.2 「 PaaS(Platform as a Service 」、 1.2.3",
  "explanation": "「 SaaS(Software as a Service)」\n\f     PaaS サービスの場合、オペレーティングシステムの更新や管理はクラウド提供事業者側の責任となるため、\n①の答えは「いいえ」です。\nIaaS の場合、物理ネットワークの責任を負うのはクラウド提供事業になりますが、ネットワーク制御 (NSG や\nVNet など)は顧客側の責任になるため、②の答えは「いいえ」です。\nSaaS サービスの ID 管理は、利用者・クラウド提供事業者ともに管理責任が生じるため、③は「はい」です。"
 },
 {
  "id": "q166",
  "number": 166,
  "type": "choice",
  "chapter": 4,
  "chapterName": "コンピューティングサービス",
  "text": "（）にあてはまる選択肢として正しいものを選択してください。\n（）を使用すると、仮想マシンを更新ドメインまたは障害ドメインにグループ化できます。",
  "choices": [
   {
    "key": "A",
    "text": "可用性セット"
   },
   {
    "key": "B",
    "text": "可用性ゾーン"
   },
   {
    "key": "C",
    "text": "Azure Load Balancer"
   },
   {
    "key": "D",
    "text": "Azure 仮想マシンスケールセット"
   }
  ],
  "correctAnswers": [
   "A"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "4.1.1「 Azure Virtual Machines(仮想マシン)」",
  "explanation": "可用性セットを構成すると、仮想マシンを障害から保護できます。可用性セットには「更新ドメイン」と「障\n害ドメイン」というグループがあり、障害ドメインは電源やネットワークなどの物理的な障害から、更新ドメイン\nはメンテナンスによる影響から仮想マシンを保護します。したがって、答えは A です。"
 },
 {
  "id": "q167",
  "number": 167,
  "type": "choice",
  "chapter": 8,
  "chapterName": "ガバナンス・コンプライアンス・監視",
  "text": "storage1 という名前の Azure ストレージアカウントがあります。storage1 でコンテナーを作成できますが、\nそこから削除できないことを確認する必要があります。あなたは何をすればいいですか？",
  "choices": [
   {
    "key": "A",
    "text": "storage1 の読み取り専用ロックを作成します。"
   },
   {
    "key": "B",
    "text": "storage1 の削除ロックを作成します。"
   },
   {
    "key": "C",
    "text": "コンテナーの論理的な削除を有効にします。"
   },
   {
    "key": "D",
    "text": "BLOB の論理的な削除を有効にします。"
   }
  ],
  "correctAnswers": [
   "B"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "8.1.2「リソースロック」",
  "explanation": "ストレージアカウントのコンテナーの削除をブロックするには、ストレージアカウントにリソースロックを設定し\nます。リソースロックには「読み取り専用」と「削除」の２種類があり、いずれもコンテナーの削除を禁止します\nが、「読み取り専用」ロックは設定変更もブロックされるため、コンテナーを新規に作成することもできなくな\nります。したがって、答えは B です。"
 },
 {
  "id": "q168",
  "number": 168,
  "type": "choice",
  "chapter": 3,
  "chapterName": "Azureの管理ツール・ガバナンス基礎",
  "text": "Azure サブスクリプションを持っています。リソースを展開するためのスクリプトを実行するには、 Azure\nCloud Shell を使用する必要があります。Cloud Shell にアクセスするには何を使用すればいいですか？",
  "choices": [
   {
    "key": "A",
    "text": "Azure Resource Manager (ARM)"
   },
   {
    "key": "B",
    "text": "Microsoft Visual Studio"
   },
   {
    "key": "C",
    "text": "Windows コマンドプロンプト"
   },
   {
    "key": "D",
    "text": "Web ブラウザー"
   }
  ],
  "correctAnswers": [
   "D"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "3.2.4「 Azure Cloud Shell」",
  "explanation": "Azure Cloud Shell は、Azure portal からも、また、「 https://shell.azure.com」の URL からもアクセスでき\nます。したがって、答えは D です。"
 },
 {
  "id": "q169",
  "number": 169,
  "type": "truefalse",
  "chapter": 4,
  "chapterName": "コンピューティングサービス",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。\n誤っている場合は「いいえ」を選択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "仮想マシンに RAM を追加することは、水平スケーリングの一例です。",
   "需要に基づいて仮想マシンを追加することは、垂直スケーリングの一例です。",
   "水平スケーリングは自動または手動で行うことができます。"
  ],
  "tfAnswers": [
   "いいえ",
   "いいえ",
   "はい"
  ],
  "review": "4.1.2「 Azure Virtual Machine Scale Sets」",
  "explanation": "仮想マシンの RAM を追加することは垂直スケーリングに該当するため、①の答えは「いいえ」です。仮想マ\nシンを追加したり、削除したりする操作は水平スケーリングに該当するため、②は「いいえ」です。 Virtual\nMachine Scale Sets を用いると、あらかじめ指定した条件に基づいて自動、もしくは管理者が指定した数で\n仮想マシンをスケーリングできます。したがって、③は「はい」です。"
 },
 {
  "id": "q170",
  "number": 170,
  "type": "truefalse",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。\n誤っている場合は「いいえ」を選択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "仮想ネットワークの作成と構成は、PaaS（ Platform as a Service）クラウドサービスモデルです。",
   "PaaS（ Platform as a Service）クラウドサービスモデルでは、Azure Web Apps に展開したコードの更新は顧客の責任です。",
   "PaaS（ Platform as a Service）クラウドサービスモデルへのユーザーアクセスの構成は顧客の責任です。"
  ],
  "tfAnswers": [
   "いいえ",
   "はい",
   "はい"
  ],
  "review": "1.2.2「 PaaS(Platform as a Service)」",
  "explanation": "仮想ネットワークの作成と構成は IaaS(Infrastructure as a Service) のため、①の答えは「いいえ」です。\nAzure Web Apps は Azure の PaaS クラウドサービスで、コンテンツやコードを実行するためのコンピューター\nや OS、ランタイムなどはクラウドサービスとして提供されますが、Azure Web Apps に展開したコードの更新は\n顧客の責任となりますので、②は「はい」です。 PaaS へのユーザーアクセス構成は、顧客の責任において行う\n必要がありますので、③は「はい」です。"
 },
 {
  "id": "q171",
  "number": 171,
  "type": "choice",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "リフトアンドシフトを使用してオンプレミスサーバーを移行する必要があります。どのタイプのクラウドサービ\nスに移行しますか？",
  "choices": [
   {
    "key": "A",
    "text": "Infrastructure as a Service（ IaaS）"
   },
   {
    "key": "B",
    "text": "SaaS（ Software as a Service）"
   },
   {
    "key": "C",
    "text": "PaaS（ Platform as a Service）"
   }
  ],
  "correctAnswers": [
   "A"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "1.2.1「 IaaS(Infrastructure as a Service)」、1.2.2「 PaaS(Platform as a Service)」",
  "explanation": "オンプレミスで稼働している既存のシステムを、クラウドに移行するアプローチとして「リフト＆シフト」があ\nります。リフト＆シフトとは、オンプレミスで稼働している物理サーバーをクラウドの仮想マシンに置き換えて移\n行するパターンのことです。したがって、答えは A です。"
 },
 {
  "id": "q172",
  "number": 172,
  "type": "truefalse",
  "chapter": 3,
  "chapterName": "Azureの管理ツール・ガバナンス基礎",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。\n誤っている場合は「いいえ」を選択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Azure リソースに割り当てることができるタグは 1 つだけです。",
   "Azure Resource Manager（ ARM）テンプレートを使用して、Azure リソースにタグを割り当てることができます。",
   "タグを使用すると、Azure リソースの命名基準を適用できます。"
  ],
  "tfAnswers": [
   "いいえ",
   "はい",
   "いいえ"
  ],
  "review": "3.5.4「タグの利用」",
  "explanation": "タグを使用すると、Azure portal 上でリソースの整理や絞り込みに活用することができます。1 つのリソース\nに対して複数のタグを設定可能なので、①の答えは「いいえ」です。 Azure Resource Manager（ AR M ）テンプ\n\fレートでタグも定義可能なので、②は「はい」です。タグでは、リソースの命名基準を指定することはできません。\nしたがって、③は「いいえ」です。"
 },
 {
  "id": "q173",
  "number": 173,
  "type": "choice",
  "chapter": 7,
  "chapterName": "ID・アクセス・セキュリティ",
  "text": "（）にあてはまる選択肢として正しいものを選択してください。\n（）は、Microsoft Entra ID へのサインインを許可または拒否するシグナルを評価します。",
  "choices": [
   {
    "key": "A",
    "text": "マネージャーID"
   },
   {
    "key": "B",
    "text": "条件付きアクセス"
   },
   {
    "key": "C",
    "text": "Microsoft Intune"
   }
  ],
  "correctAnswers": [
   "B"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "7.1.5「 Azure Active Directory(Microsoft Entra ID)のライセンスと主な機能」",
  "explanation": "条件付きアクセスを使用すると、認証時のアクセス許可にさまざまな条件を設定することができます。たと\nえば、特定のアプリに対して社外からのアクセスを拒否したり、Azure portal にアクセスする管理者ユーザーに\n対して多要素認証を要求したりすることができます。したがって、答えは B です。"
 },
 {
  "id": "q175",
  "number": 175,
  "type": "truefalse",
  "chapter": 8,
  "chapterName": "ガバナンス・コンプライアンス・監視",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。誤っている場合は「いいえ」を選択\nしてください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Azure Advisor はアラートをサポートしています。",
   "Azure Advisor の推奨事項は、管理単位ごとにフィルターできます。",
   "Azure Advisor は、リソースのパフォーマンスを向上させるための推奨事項を提供します。"
  ],
  "tfAnswers": [
   "はい",
   "いいえ",
   "はい"
  ],
  "review": "8.2.1「 Azure Advisor」",
  "explanation": "Azure Advisor アラートを使用すると新しい推奨事項が提供されるとアラートで通知を行うことができます。\n従って、①の答えは「はい」です。推奨事項のフィルタリング条件として、リソースの種類やタグ、リソースグル\nープなどで絞り込めますが、管理単位でフィルタリングすることはできないので②は「いいえ」です。 Azure\nAdvisor の「パフォーマンス」で、パフォーマンスに関しての推奨事項が提供されるため、③は「はい」です。"
 },
 {
  "id": "q176",
  "number": 176,
  "type": "truefalse",
  "chapter": 3,
  "chapterName": "Azureの管理ツール・ガバナンス基礎",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。\n誤っている場合は「いいえ」を選択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "総保有コスト（ TCO ）計算ツールには、データセンターでのワークロードの実行コストが表示されます。",
   "総保有コスト（ TCO ）計算ツールには、Azure でのワークロードの実行コストが表示されます。",
   "総保有コスト（ TCO ）計算ツールは、グラフィカルなレポートを生成します。"
  ],
  "tfAnswers": [
   "はい",
   "はい",
   "はい"
  ],
  "review": "3.5.2「料金計算ツールと総保有コスト(TCO)計算ツール」",
  "explanation": "総保有コスト（ TCO）計算ツールを使用すると、オンプレミスのデータセンターのコストと Azure 移行後のコ\nストを比較し、グラフィカルなレポートを生成します。したがって、答えはすべて「はい」です。"
 },
 {
  "id": "q177",
  "number": 177,
  "type": "truefalse",
  "chapter": 5,
  "chapterName": "ネットワークサービス",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。\n誤っている場合は「いいえ」を選択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "ネットワークセキュリティグループ (NSG) には、複数の受信および送信セキュリティ規則を含めることができます。",
   "ファイアウォールの実行などの特定の機能を実行する VM は、ネットワーク仮想アプライアンスともよばれます。",
   "ユーザー定義ルート（ UDR）は、単一の仮想ネットワークのサブネット間のネットワークトラフィックのみを制御できます。"
  ],
  "tfAnswers": [
   "はい",
   "はい",
   "いいえ"
  ],
  "review": "5.1.2「ネットワークセキュリティグループ（ NSG）」",
  "explanation": "ネットワークセキュリティグループ（ NSG ）を用いると、受信セキュリティルールおよび送信セキュリティルール\nを構成してネットワークのフィルタリングを行うことができます。したがって、①の答えは「はい」です。ファイア\nウォールなどの機能を実行する VM はネットワーク仮想アプライアンスと呼ばれるため、②は「はい」です。ユー\nザー定義ルート（ UDR ）を用いるとネットワークトラフィックの経路を制御できますが、これは単一の仮想ネット\nワークに限らず、仮想ネットワーク間、オンプレミスネットワーク、インターネットに対してのネットワークトラフィ\nック経路も制御可能なので、③の答えは「いいえ」です。"
 },
 {
  "id": "q178",
  "number": 178,
  "type": "choice",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "Microsoft 365 はどのクラウドサービスモデルの一例ですか？",
  "choices": [
   {
    "key": "A",
    "text": "Infrastructure as a Service（ IaaS）"
   },
   {
    "key": "B",
    "text": "Platform as a Service（ PaaS）"
   },
   {
    "key": "C",
    "text": "Software as a Service（ SaaS）"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "1.2.3「 SaaS(Software as a Service)」",
  "explanation": "Microsoft365 は、Word や Excel などのアプリ、そして Teams や Exchange Online などのサービスが提供さ\nれているマイクロソフト社のクラウドサービスです。クラウド上でアプリケーションが提供されているため、SaaS\nサービスモデルに分類されます。したがって、答えは C です。"
 },
 {
  "id": "q179",
  "number": 179,
  "type": "choice",
  "chapter": 8,
  "chapterName": "ガバナンス・コンプライアンス・監視",
  "text": "次のステートメントを完成させてください。\nAzure Policy 定義を［］に割り当てることができます。",
  "choices": [
   {
    "key": "A",
    "text": "コンテナアプリ"
   },
   {
    "key": "B",
    "text": "リソースグループ"
   },
   {
    "key": "C",
    "text": "リソースロック"
   },
   {
    "key": "D",
    "text": "セキュリティグループ"
   }
  ],
  "correctAnswers": [
   "B"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "8.1.1「 Azure Policy」",
  "explanation": "ポリシー定義やイニシアチブ定義は、管理グループ、サブスクリプション、リソースグループに割り当てることが\nできます。",
  "supplement": "ポリシーやイニシアチブ（ポリシーの束）は、管理グループ・サブスクリプション・リソースグループのどの階層にも割り当てられます。上位の階層に割り当てるほど、その配下すべてにルールが一括で効きます。",
  "diagram": "resource-hierarchy"
 },
 {
  "id": "q180",
  "number": 180,
  "type": "choice",
  "chapter": 3,
  "chapterName": "Azureの管理ツール・ガバナンス基礎",
  "text": "Azure 環境があります。A ndroid OS を実行するタブレットから Azure 仮想マシンを作成する必要がありま\nす。考えられる 3 つの解決策は何ですか。それぞれの正解は完全な解決策を示します。",
  "choices": [
   {
    "key": "A",
    "text": "設定アプリを使用します。"
   },
   {
    "key": "B",
    "text": "Azure portal を使用します。"
   },
   {
    "key": "C",
    "text": "Azure Cloud Shell で Bash を使用します。"
   },
   {
    "key": "D",
    "text": "PowerApps portal を使用します。"
   },
   {
    "key": "E",
    "text": "Azure Cloud Shell で PowerShell を使用します。"
   }
  ],
  "correctAnswers": [
   "B",
   "C",
   "E"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "3.2「 Azure の管理ツール」",
  "explanation": "Android OS を実行するタブレットから Azure を管理するには、Web ブラウザーで Azure portal にアクセス\nするか、または Azure Cloud Shell の Bash や PowerShell で操作を行います。"
 },
 {
  "id": "q181",
  "number": 181,
  "type": "truefalse",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。\n誤っている場合は「いいえ」を選択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "水平スケーリングにより、仮想マシンインスタンスの数を自動的に増やすことができます。",
   "垂直スケーリングにより、仮想マシンに追加のメモリを自動的に割り当てることができます。",
   "スケーリングを使用すると、サービスの需要に基づいてコストを管理できます。"
  ],
  "tfAnswers": [
   "はい",
   "はい",
   "はい"
  ],
  "review": "1.1.2「クラウドを利用するメリット」、4.1.2「 Azure Virtual Machine Scale Sets」",
  "explanation": "水平スケーリングは仮想マシンの台数を増減させることです。Azure Virtual Machine Scale Sets サービ\n\fスは、仮想マシンのパフォーマンスデータを読み取って、自動的に台数を増やしたり、減らしたりすることがで\nきます。\n垂直スケーリングは仮想マシンの性能を増減させることです。仮想マシンのサイズを上げたり、下げたりす\nることで仮想マシンの CPU やメモリを増減することができます。\nスケーリングとはコンピューティング能力を増やしたり減らしたりすることです。サイズを下げたり、仮想マシ\nンの台数を減らすことでコストを削減できます。"
 },
 {
  "id": "q182",
  "number": 182,
  "type": "truefalse",
  "chapter": 8,
  "chapterName": "ガバナンス・コンプライアンス・監視",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。\n誤っている場合は「いいえ」を選択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Microsoft Entra ユーザーにリソースロックを追加することができます。",
   "同じ Azure 仮想マシンに複数のリソースロックを追加することができます。",
   "削除ロックが設定されている Azure リソースのプロパティを変更することができます。"
  ],
  "tfAnswers": [
   "いいえ",
   "はい",
   "はい"
  ],
  "review": "8.1.2「リソースロック」",
  "explanation": "リソースロックは、サブスクリプション、リソースグループ、リソースに設定することができます。 Microsoft\nEntra ユーザーには設定できません。\n１つの Azure リソース(仮想マシンなど)に複数のリソースロックを追加することができます。\n削除ロックは、削除を禁止します。したがってプロパティを変更することはできます。"
 },
 {
  "id": "q183",
  "number": 183,
  "type": "choice",
  "chapter": 8,
  "chapterName": "ガバナンス・コンプライアンス・監視",
  "text": "RG1 という名前のリソースグループを服す Azure サブスクリプションがあります。\nユーザーは次の操作を実行できてはなりません。\n•   RG1 を削除する\n•   RG1 でリソースを変更する\n•   RG1 からリソースを削除する\n\f   あなたは何をするべきですか。",
  "choices": [
   {
    "key": "A",
    "text": "RG1 に削除ロックを適用します。"
   },
   {
    "key": "B",
    "text": "RG1 に読み取り専用ロックを適用します。"
   },
   {
    "key": "C",
    "text": "ロールベースのアクセス制御 (RBAC) の権限を RG1 に付与します。"
   },
   {
    "key": "D",
    "text": "RG1 にタグを追加します。"
   }
  ],
  "correctAnswers": [
   "B"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "8.1.2「リソースロック」",
  "explanation": "読み取り専用ロックは、リソースの変更や削除を禁止します。RG1 リソースグループの削除、RG1 リソースグ\nループ内のリソースの変更や削除を許可したくないということなので、RG1 リソースグループに読み取り専用\nロックを適用します。"
 },
 {
  "id": "q184",
  "number": 184,
  "type": "choice",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "問題文中の（）にあてはまるものを選択肢から選んでください。\n稼働率が 99.999%のサービスは、稼働率が 99.9%のサービスよりも（）が高いです。",
  "choices": [
   {
    "key": "A",
    "text": "可用性"
   },
   {
    "key": "B",
    "text": "弾力性"
   },
   {
    "key": "C",
    "text": "管理性"
   },
   {
    "key": "D",
    "text": "スケーラビリティ"
   }
  ],
  "correctAnswers": [
   "A"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "1.1.2「クラウドを利用するメリット」",
  "explanation": "可用性とはシステムが停止する頻度や時間が極力するないことを指します。そして稼働率とはサービスが\n正常に稼働している割合を意味します。稼働率 99.999%は 1 年間で 5 分 15 秒、稼働率 99.9%は年間 8.76\n時間停止することに相当します。したがって、稼働率 99.999%の方が 99.9%よりもサービスの信頼性が高いと\nいうことになります。"
 },
 {
  "id": "q185",
  "number": 185,
  "type": "choice",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "オペレーティングシステムは、どのタイプのクラウドサービスにインストールできますか。",
  "choices": [
   {
    "key": "A",
    "text": "IaaS (Infrastructure as a Service) のみ"
   },
   {
    "key": "B",
    "text": "SaaS (Software as a Service) のみ"
   },
   {
    "key": "C",
    "text": "IaaS(Infrastructure as a Service) と PaaS(Platform as a Service) のみ"
   },
   {
    "key": "D",
    "text": "PaaS(Platform as a Service) と SaaS (Software as a Service) のみ"
   }
  ],
  "correctAnswers": [
   "A"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "1.2「クラウドコンピューティングのサービスモデル」",
  "explanation": "IaaS は仮想マシンを作成し、自由に OS をインストールすることができます。そして、PaaS はアプリケーショ\nンを実行するためのプラットフォームを提供してくれるため、アプリケーションの開発環境を一から作成する必\n要がないというのが特徴です。したがって OS をインストールすることはできません。また SaaS はアプリまで利\n用可能な状態で提供されるのが特徴です。SaaS も OS をインストールすることはできません。"
 },
 {
  "id": "q187",
  "number": 187,
  "type": "choice",
  "chapter": 5,
  "chapterName": "ネットワークサービス",
  "text": "問題文中の（）にあてはまるものを選択肢から選んでください。\n仮想ネットワークピアリングは、（）間に構成できます。",
  "choices": [
   {
    "key": "A",
    "text": "同じＡｚｕｒｅリソージョンの 2 つの仮想ネットワーク"
   },
   {
    "key": "B",
    "text": "同じリソースグループの 2 つの仮想ネットワーク"
   },
   {
    "key": "C",
    "text": "同じ Azure サブスクリプションの 2 つの仮想ネットワーク"
   },
   {
    "key": "D",
    "text": "任意の 2 つの仮想ネットワーク"
   }
  ],
  "correctAnswers": [
   "D"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "5.1.3「仮想ネットワーク間の接続」",
  "explanation": "仮想ネットワークピアリングとは、Azure の 2 つの仮想ネットワークをマイクロソフトのバックボーンを使用し\nて接続する機能です。異なるリージョンの仮想ネットワーク間、異なるサブスクリプションの仮想ネットワーク\n間、異なるリソースグループの仮想ネットワーク間を接続できます。"
 },
 {
  "id": "q188",
  "number": 188,
  "type": "choice",
  "chapter": 2,
  "chapterName": "Azureの基礎・コスト管理",
  "text": "問題文中の（）にあてはまるものを選択肢から選んでください。\n多くの Azure のリソースは、デプロイ先の（）を指定する必要があります。",
  "choices": [
   {
    "key": "A",
    "text": "地理"
   },
   {
    "key": "B",
    "text": "リージョン"
   },
   {
    "key": "C",
    "text": "データセンター"
   },
   {
    "key": "D",
    "text": "都市"
   }
  ],
  "correctAnswers": [
   "B"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "2.1.1「リージョンとは」",
  "explanation": "リージョンとは Azure のデータセンターがある地域のことで、世界中に 60 以上が存在しています。多くのサ\nービスでは、どこでサービスを利用するのかを指定する際にリージョンを選択する必要があります。"
 },
 {
  "id": "q190",
  "number": 190,
  "type": "truefalse",
  "chapter": 0,
  "chapterName": "その他",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。\n誤っている場合は「いいえ」を選択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Microsoft Purview はデータバックアップを提供します。",
   "Microsoft Purview はデータ検出を提供します。",
   "Microsoft Purview はデータ分類を提供します。"
  ],
  "tfAnswers": [
   "いいえ",
   "はい",
   "はい"
  ],
  "review": "最新の試験情報の「 Microsoft Purview ユニファイドデータガバナンスについて」",
  "explanation": "Microsoft Purview は、組織のデータ資産のガバナンス、保護、管理を支援する包括的な統合 (ユニファイド)\nデータガバナンスソリューションを提供します。Microsoft Purview は、Azure Purview と Microsoft 365 のコ\nンプライアンス対策を１つのブランドに統合したもので、オンプレミス、マルチクラウド、SaaS のデータ管理とガ\nバナンスに役立ちます。\nMicrosoft Purview では、主に次の機能を提供します。\n•データマップ\nデータソースをスキャンしデータ資産を可視化\n•データカタログ\nデータを分類し、検索可能なカタログを作成\n•データ共有\n安全にデータを共有し、アクセスを管理\n•データ分析\nデータの使用状況を分析し、インサイトを提供\n以上のことから、Microsoft Purview はバックアップ機能を提供しません。そして Microsoft Purview は、デー\nタ検出とデータ分類を提供します。"
 },
 {
  "id": "q191",
  "number": 191,
  "type": "truefalse",
  "chapter": 5,
  "chapterName": "ネットワークサービス",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。\n誤っている場合は「いいえ」を選択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Azure DNS は、パブリック DNS ドメイン名のみをサポートします。",
   "Azure Virtual Machines は、自動的に Azure DNS に名前を登録することができます。",
   "Azure DNS は、カスタム DNS ドメインをホストすることができます。"
  ],
  "tfAnswers": [
   "いいえ",
   "はい",
   "はい"
  ],
  "review": "5.2「 Azure の名前解決について」",
  "explanation": "Azure DNS は Azure の名前解決を提供するサービスの総称で、主にインターネットの名前解決を行う「 DNS\nゾーン」と Azure 内部の名前解決を行う「 Private DNS ゾーン」サービスがあります。したがって①は「いいえ」\nになります。\nまた Private DNS ゾーンサービスでは、リンクした仮想ネットワークに仮想マシンの A レコードを自動的に登\n録することができます。したがって②は「はい」になります。\nそして DNS ゾーンは、カスタム DNS ドメインもホストすることができるため③は「はい」になります。"
 },
 {
  "id": "q193",
  "number": 193,
  "type": "truefalse",
  "chapter": 6,
  "chapterName": "ストレージサービス",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。\n誤っている場合は「いいえ」を選択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Azure ストレージのコールドアクセス層は、少なくとも 90 日間のデータストレージ用に最適化されています。",
   "Azure ストレージのクールアクセス層は、少なくとも 90 日間のデータストレージ用に最適化されています。",
   "Azure ストレージのアーカイブアクセス層は、少なくとも 180 日間のデータストレージ用に最適化されています。"
  ],
  "tfAnswers": [
   "はい",
   "いいえ",
   "はい"
  ],
  "review": "6.1.5「 BLOB のアクセス層」",
  "explanation": "BLOB にはアクセス層という概念があり、どのアクセス層が選択されているかによって発生する「アクセスコ\nスト」と「ストレージコスト」が異なります。アクセス層は、次の 4 種類が存在します。\n•ホットアクセス層\nアクセスコストが最も安いため、アプリケーションなどから頻繁に読み取りや書き込みが行われるデー\nタの保存に最適です。\n•クールアクセス層\nアクセス頻度が低いデータに適しています。ホット層に比べてストレージコストが安く、アクセスコスト\nが高く設定されています。最低 30 日間の保存が必要です。\n•コールドアクセス層※新しく追加\n追加された新しいアクセス層で、めったにアクセスされないが、迅速に取得する必要があるデータに\n適しています。クール層に比べてストレージコストが安く、アクセスコストが高く設定されています。最\n低 90 日間の保存が必要です。\n•アーカイブアクセス層\nほとんどアクセスされないデータに最適です。ストレージコストは最も安いですが、アクセスコストと待\n機時間が高くなります。最低 180 日間の保存が必要です。\n以上のことから、コールドアクセス層は 90 日間の保存が必要なので①の答えは「はい」になります。そして\nクールアクセス層は最低 30 日間の保存が必要なので、②の答えは「いいえ」になります。またアーカイブア\nクセス層は最低 180 日間の保存が必要なので、③の答えは「はい」になります。"
 },
 {
  "id": "q194",
  "number": 194,
  "type": "choice",
  "chapter": 8,
  "chapterName": "ガバナンス・コンプライアンス・監視",
  "text": "問題文中の（）にあてはまるものを選択肢から選んでください。\n（）を使用して、コスト削減に関する推奨事項を作成できます。",
  "choices": [
   {
    "key": "A",
    "text": "Application Insights"
   },
   {
    "key": "B",
    "text": "Azure Advisor"
   },
   {
    "key": "C",
    "text": "Azure リソースグループ"
   },
   {
    "key": "D",
    "text": "Azure サービスの正常性"
   }
  ],
  "correctAnswers": [
   "B"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "8.2.1「 Azure Advisor」",
  "explanation": "Azure Advisor とは、Azure のベストプラクティス(最善の方法 )に従って A zure リソースの構築や運用に関\nするアドバイスを行ってくれるサービスです。Azure Advisor が提供する推奨事項は、5 つのカテゴリーに分類\nされます。\n•コスト\n•セキュリティ\n•信頼性\n•パフォーマンス\n•オペレーショナルエクセレンス"
 },
 {
  "id": "q196",
  "number": 196,
  "type": "truefalse",
  "chapter": 8,
  "chapterName": "ガバナンス・コンプライアンス・監視",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。\n誤っている場合は「いいえ」を選択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "読み取り専用ロックにより、ユーザーはＡｚｕｒｅリソースを削除できなくなります。",
   "ユーザーは、削除ロックが適用されたＡｚｕｒｅリソースを変更することができます。",
   "すべてのＡｚｕｒｅリソースは、それらの親のリソースグループに適用されたロックを継承します。"
  ],
  "tfAnswers": [
   "はい",
   "はい",
   "はい"
  ],
  "review": "8.1.2「リソースロック」",
  "explanation": "リソースロックには、読み取り専用ロックと削除ロックがあります。読み取り専用ロックが適用されていると、\n変更も削除もできなくなります。そして削除ロックが適用されていると、リソースの削除はできませんが、変更\nは可能です。したがって①の答えは「はい」になります。また②の答えも「はい」になります。\n上の階層に適用されたロックは、下の階層に継承します。したがって、③の答えは「はい」になります。"
 },
 {
  "id": "q198",
  "number": 198,
  "type": "choice",
  "chapter": 6,
  "chapterName": "ストレージサービス",
  "text": "Geo ゾーン冗長ストレージ(GZRS)には、いくつの出たコピーが保存されますか。",
  "choices": [
   {
    "key": "A",
    "text": "2"
   },
   {
    "key": "B",
    "text": "3"
   },
   {
    "key": "C",
    "text": "6"
   },
   {
    "key": "D",
    "text": "12"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "6.1.3「ストレージアカウントの冗長化オプション」",
  "explanation": "ストレージアカウントの冗長化オプションには 6 種類あり、データのレプリカ(コピー)がいくつ作成されるか、\nそしてどこに作成されるのかが決まります。Geo ゾーン冗長ストレージ(GZRS)は、選択したリージョンとそのリ\nージョンのペアのリージョンに計 6 つのデータコピーが作成されます。"
 },
 {
  "id": "q199",
  "number": 199,
  "type": "choice",
  "chapter": 6,
  "chapterName": "ストレージサービス",
  "text": "問題文中の（）にあてはまるものを選択肢から選んでください。\n30 日が経過する前に(       )からデータを削除する場合は、早期削除料金を支払う必要があります。",
  "choices": [
   {
    "key": "A",
    "text": "Azure Cosmos DB データベース"
   },
   {
    "key": "B",
    "text": "Azure SQL Database"
   },
   {
    "key": "C",
    "text": "Azure Blob ストレージのクールアクセス層"
   },
   {
    "key": "D",
    "text": "Azure Blob ストレージのホットアクセス層"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "6.1.5「 BLOB のアクセス層」",
  "explanation": "クールアクセス層は、短期バックアップデータなどの読み取りや変更の頻度が低いデータの保存に最適です。\nホットアクセス層に比べて、ストレージコストが低くアクセスコストが高く設定されており、最低 30 日間は削除\nせずに置いておく必要があります。30 日以内に削除すると、早期削除料金が発生します。"
 },
 {
  "id": "q201",
  "number": 201,
  "type": "choice",
  "chapter": 2,
  "chapterName": "Azureの基礎・コスト管理",
  "text": "問題文中の（）にあてはまるものを選択肢から選んでください。\nクラウドサービスプロバイダーのサービスレベル契約 (SLA)は、年間の稼働時間の割合として（）を表します。",
  "choices": [
   {
    "key": "A",
    "text": "可用性"
   },
   {
    "key": "B",
    "text": "弾力性"
   },
   {
    "key": "C",
    "text": "信頼性"
   },
   {
    "key": "D",
    "text": "スケーラビリティ"
   }
  ],
  "correctAnswers": [
   "A"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "2.24「サービスレベルアグリーメント(SLA)」",
  "explanation": "SLA とは、クラウドサービスプロバイダーと利用者との間で結ばれるサービスのレベルに関する合意事項の\n事です。サービスの継続稼働 (可用性 )のレベルを保証するのが SLA です。"
 },
 {
  "id": "q202",
  "number": 202,
  "type": "choice",
  "chapter": 8,
  "chapterName": "ガバナンス・コンプライアンス・監視",
  "text": "Azure のコストを削減する推奨事項を作成するには、何を使用できますか。",
  "choices": [
   {
    "key": "A",
    "text": "Azure Advisor"
   },
   {
    "key": "B",
    "text": "Log Analytics"
   },
   {
    "key": "C",
    "text": "Azure サービス正常性"
   },
   {
    "key": "D",
    "text": "Azure 料金計算ツール"
   }
  ],
  "correctAnswers": [
   "A"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "8.2.1「 Azure Advisor」",
  "explanation": "Azure Advisor とは、Azure のベストプラクティス(最善の方法 )に従って A zure リソースの構築や運用に関\nするアドバイスを行ってくれるサービスです。Azure Advisor が提供する推奨事項は、5 つのカテゴリーに分類\nされます。\n•コスト\n•セキュリティ\n•信頼性\n•パフォーマンス\n•オペレーショナルエクセレンス\n以上のことから、Azure Advisor を使用すると、コスト削減のための推奨事項を確認できます。"
 },
 {
  "id": "q203",
  "number": 203,
  "type": "choice",
  "chapter": 3,
  "chapterName": "Azureの管理ツール・ガバナンス基礎",
  "text": "問題文中の（）にあてはまるものを選択肢から選んでください。\n（）を使用すると、オブジェクトを論理的にグループ化して、部門コストの報告や予算の追跡を行うことが\nできます。",
  "choices": [
   {
    "key": "A",
    "text": "Azure Policy"
   },
   {
    "key": "B",
    "text": "Azure サービス正常性"
   },
   {
    "key": "C",
    "text": "リソースタグ"
   },
   {
    "key": "D",
    "text": "セキュリティグループ"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "3.5.4「タグの利用」",
  "explanation": "タグとは、Azure のリソースやリソースグループなどに情報を設定するためのサービスです。リソースに部署\nやプロジェクトの名前などをタグでセットすると、それを請求書に表示して部門ごとやプロジェクトごとにいく\nらかかったのかを計算することができるようになります。"
 },
 {
  "id": "q204",
  "number": 204,
  "type": "choice",
  "chapter": 6,
  "chapterName": "ストレージサービス",
  "text": "会社にはロサンゼルスとニューヨークにデータセンターがあり、Microsoft Azure サブスクリプションを所有\nしています。\nサイトの回復性を確保するために、2 つのデータセンターを地理的にクラスター化されたサイトとして構成し\nています。Azure ストレージ冗長オプションを推奨する必要があります。\nデータストレージの要件は次のとおりです\n•データは複数のノードに保存する必要があります\n•データは地理的に異なる場所にあるノードに保存する必要があります\n•データはプライマリロケーションだけでなくセカンダリロケーションからも読み取ることができます\nどの Azure ストレージ冗長オプションを推奨しますか。",
  "choices": [
   {
    "key": "A",
    "text": "ジオ冗長ストレージ"
   },
   {
    "key": "B",
    "text": "読み取りアクセスジオ冗長ストレージ"
   },
   {
    "key": "C",
    "text": "ゾーン冗長ストレージ"
   },
   {
    "key": "D",
    "text": "ローカル冗長ストレージ"
   }
  ],
  "correctAnswers": [
   "B"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "6.1.3 「ストレージアカウントの冗長化オプション」",
  "explanation": "サイトの回復性を確保するために、異なる地域のデータセンターにデータを配置し、プライマリからだけであ\nなく、セカンダリからも読み取りアクセスが必要とのことなので、正解は読み取りアクセスジオ冗長ストレージ\n(RA-GRS)になります。"
 },
 {
  "id": "q205",
  "number": 205,
  "type": "choice",
  "chapter": 6,
  "chapterName": "ストレージサービス",
  "text": "あなたは Azure 仮想マシンを展開する任務を負っています。適切なクラウド展開ソリューションはどれです\nか？",
  "choices": [
   {
    "key": "A",
    "text": "Software as a Service (SaaS)"
   },
   {
    "key": "B",
    "text": "Platform as a Service (PaaS)"
   },
   {
    "key": "C",
    "text": "Infrastructure as a Service (IaaS)"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "6.1.3 「ストレージアカウントの冗長化オプション」",
  "explanation": "Azure 仮想マシンは、IaaS です。",
  "supplement": "IaaS（Infrastructure as a Service）は、サーバーやネットワークといった「インフラ」だけをクラウドから借りる形態です。Azure 仮想マシンはその代表で、OS の導入・設定やソフトのインストールは自分で行います。自由度が高い反面、管理の手間も自分持ちになるのが特徴です。",
  "diagram": "service-models"
 },
 {
  "id": "q206",
  "number": 206,
  "type": "choice",
  "chapter": 3,
  "chapterName": "Azureの管理ツール・ガバナンス基礎",
  "text": "あなたの会社のインフラストラクチャには、多数の事業部門が含まれており、各部門は日常業務に多数の多\n様な Azure リソースを必要としています。\n各事業部門に必要なリソースは同一で、それらのリソースを自動的に作成するための方法を選択する必要が\nあります。\n\f 何を使用するべきですか？",
  "choices": [
   {
    "key": "A",
    "text": "管理グループ"
   },
   {
    "key": "B",
    "text": "Azure Resource Manager(ARM)テンプレート"
   },
   {
    "key": "C",
    "text": "1 つの可用性ゾーンと 2 台の仮想マシン"
   },
   {
    "key": "D",
    "text": "２つの可用性ゾーンと 2 台の仮想マシン"
   }
  ],
  "correctAnswers": [
   "B"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "3.3.1 「 ARM テンプレート」",
  "explanation": "ARM テンプレートとは、リソースの作成や構成に使用できるテンプレートファイルです。ARM テンプレートを\n実行すると、テンプレートに定義したとおりのリソースが、一貫性のある状態で作成、構成されます。"
 },
 {
  "id": "q207",
  "number": 207,
  "type": "choice",
  "chapter": 4,
  "chapterName": "コンピューティングサービス",
  "text": "重要な LOB アプリケーションを仮想マシンにインストールし、Azure にデプロイするタスクがあります。\nアプリケーションのデプロイ戦略では、 99.99% の可用性を保証する必要があると説明されています。この\n戦略では、必要な仮想マシンと可用性ゾーンの数を可能な限り少なくする必要があります。\nどの構成を選択しますか？",
  "choices": [
   {
    "key": "A",
    "text": "2 台の仮想マシンと 1 つの可用性ゾーン"
   },
   {
    "key": "B",
    "text": "1 台の仮想マシンと 2 つの可用性ゾーン"
   },
   {
    "key": "C",
    "text": "2 台の仮想マシンと 2 つの可用性ゾーン"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "4.1.1 「 Azure Virtual Machines (仮想マシン)」",
  "explanation": "仮想マシンで 99.99%の可用性を実現するには、複数の可用性ゾーンに仮想マシンを配置します。したがっ\nて、２つの可用性ゾーンに 1 台ずつ仮想マシンを配置する C が正解です。"
 },
 {
  "id": "q208",
  "number": 208,
  "type": "choice",
  "chapter": 5,
  "chapterName": "ネットワークサービス",
  "text": "Azure に複数の Web サーバーとデータベースサーバーをデプロイする戦略を計画しています。\nこの戦略では、 Web サーバーとデータベースサーバー間の接続の種類を制御できるようにする必要があり\nます。何を使用して構成するべきですか？",
  "choices": [
   {
    "key": "A",
    "text": "ネットワークセキュリティグループ (NSG)"
   },
   {
    "key": "B",
    "text": "ローカルネットワークゲートウェイ"
   },
   {
    "key": "C",
    "text": "Azure Container Instance"
   }
  ],
  "correctAnswers": [
   "A"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "5.1.2 「ネットワークセキュリティグループ (NSG) 」",
  "explanation": "ネットワークセキュリティグループ(NSG)を使用すると、インターネットとの通信や Azure 内部 (仮想ネットワ\nーク間やサブネット間 )の通信を制限できます。"
 },
 {
  "id": "q209",
  "number": 209,
  "type": "truefalse",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。\n誤っている場合は「いいえ」を選択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Azure で Web アプリをホストする「サービスとしてのプラットフォーム (PaaS) 」ソリューションは、アプリケーションをホストするオペレーティングシステムを完全に制御できます。。",
   "Azure で Web アプリをホストする「サービスとしてのプラットフォーム (PaaS) 」ソリューションは、プラットフォームを自動的にスケーリングする機能を提供します。",
   "Azure で Web アプリをホストする「サービスとしてのプラットフォーム (PaaS) 」ソリューションは、カスタムアプリケーションに継続的に機能を追加するための専門的な開発サービスを提供します。"
  ],
  "tfAnswers": [
   "いいえ",
   "はい",
   "いいえ"
  ],
  "review": "1.2 「クラウドコンピューティングのサービスモデル」",
  "explanation": "PaaS はクラウドサービス事業者が OS を管理するため、利用者側で OS を制御することはできません。\nまた、App Service などの PaaS のサービスには、需要に基づいた自動スケーリングの機能が備わっている\nため、リソースを動的に調整することが容易です。\nそして、PaaS には機能更新のための専門的な開発サービスは含まれていません。"
 },
 {
  "id": "q210",
  "number": 210,
  "type": "truefalse",
  "chapter": 3,
  "chapterName": "Azureの管理ツール・ガバナンス基礎",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。\n誤っている場合は「いいえ」を選択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Azure は、資本的支出 (CapEX)と運用的支出 (OpEx)の間で柔軟性を提供します。",
   "B2S サイズを使用する 2 つの Azure 仮想マシンを作成すると、仮想マシンでは常に同じ月額コストが発生します。",
   "Azure 仮想マシンが停止した場合、仮想マシンに関連付けられたストレージコストは引き続き発生します。"
  ],
  "tfAnswers": [
   "いいえ",
   "いいえ",
   "はい"
  ],
  "review": "3.5 「 Azure のコスト管理」",
  "explanation": "Azure のコストは、基本的に従量課金であるため使った分だけが請求される運用コスト(OpEx)になります。\nしかし、仮想マシンなどには事前に前払いする予約の機能があるため、構成によっては資本支出 (CapEx)も選\n択できます。\nまた、Azure の料金は、同じサイズの仮想マシンであってもリージョンによって料金が変わります。\nそして、仮想マシンを停止してもコンピューティングの課金は停止しますが、ストレージのコストは引き続き\n発生します。"
 },
 {
  "id": "q211",
  "number": 211,
  "type": "choice",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "問題文中の（）にあてはまるものを選択肢から選んでください。\nSoftware as a Service(SaaS)を実装すると、あなたは（）の責任を負います。",
  "choices": [
   {
    "key": "A",
    "text": "可用性の構成"
   },
   {
    "key": "B",
    "text": "スケールルールの構成"
   },
   {
    "key": "C",
    "text": "SaaS ソリューションのインストール"
   },
   {
    "key": "D",
    "text": "SaaS ソリューションの構成"
   }
  ],
  "correctAnswers": [
   "D"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "1.2.3 「 SaaS (Software as a Service)」",
  "explanation": "SaaS はアプリまで利用可能な状態で提供されるため、利用者はライセンスを契約するだけで、すぐにでもイ\nンターネット経由でアプリを使用できます。ただし、利用者はアプリを適切に使うためにロールの割り当てなど\nを必要に応じて行う必要があります。"
 },
 {
  "id": "q212",
  "number": 212,
  "type": "choice",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "あなたの会社では、全顧客が利用する会計アプリケーション「 App1」をホストしています。\nApp1 は毎月最初の 3 週間は使用率が低く、最後の 1 週間は非常に高い使用率となります。\nこのような使用パターンにおけるコスト管理をサポートする Azure クラウドサービスのメリットはどれですか？",
  "choices": [
   {
    "key": "A",
    "text": "高可用性"
   },
   {
    "key": "B",
    "text": "高いレイテンシー"
   },
   {
    "key": "C",
    "text": "弾力性"
   },
   {
    "key": "D",
    "text": "負荷分散"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "1.1.2 「クラウドを利用するメリット」",
  "explanation": "クラウドを利用するメリットとして、高いスケーラビリティがあります。Azure の App Service などのサービス\nにはインスタンス( 仮想マシン ) のパフォーマンスデータを読み取って、自動的に台数を増やしたり、減らしたり\nすることができます。このように動的にリソースの割り当てを変更できることを「弾力性 (Elasticity)」と呼び\nます。"
 },
 {
  "id": "q213",
  "number": 213,
  "type": "truefalse",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。\n誤っている場合は「いいえ」を選択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "ハイブリッドクラウドモデルを実現するには、企業は常にプライベートクラウドモデルから移行する必要があります。",
   "企業はパブリッククラウドを使用することで社内ネットワークの容量を拡張できます。",
   "パブリッククラウドモデルでは、社内のゲストユーザーのみがクラウド内のリソースにアクセスできます"
  ],
  "tfAnswers": [
   "いいえ",
   "いいえ",
   "いいえ"
  ],
  "review": "1.1.3 「クラウドモデルとは」",
  "explanation": "ハイブリッドクラウドは、パブリッククラウドとプライベートクラウドを両方利用する形態のことです。プライベ\nートクラウドから移行する必要はありません。\nまた、パブリッククラウドを使用しても、社内ネットワークの容量は拡張しません。\nそして、パブリッククラウドにアクセスするには、社内のゲストユーザーである必要はありません。パブリック\nクラウドに登録しているユーザー、Azure の場合は Microsoft Entra ID に登録されているユーザーでアクセス\nします。"
 },
 {
  "id": "q214",
  "number": 214,
  "type": "choice",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "問題文中の（）にあてはまるものを選択肢から選んでください。\nAzure Site Recovery は、仮想マシンの（）を提供します。",
  "choices": [
   {
    "key": "A",
    "text": "フォールトトレランス"
   },
   {
    "key": "B",
    "text": "災害復旧 (Disaster Reco very)"
   },
   {
    "key": "C",
    "text": "弾力性 (Elasticity)"
   },
   {
    "key": "D",
    "text": "高可用性"
   }
  ],
  "correctAnswers": [
   "B"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "1.1.2 「クラウドを利用するメリット」",
  "explanation": "Azure Site Recovery は災害対策を目的に仮想マシンを他のリージョンなどに複製するサービスです。"
 },
 {
  "id": "q215",
  "number": 215,
  "type": "choice",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "すべてのハードウェアリソースがサードパーティによって所有され、複数のテナント間で共有されるクラウド\nモデルのタイプはどれですか。",
  "choices": [
   {
    "key": "A",
    "text": "プライベート"
   },
   {
    "key": "B",
    "text": "ハイブリッド"
   },
   {
    "key": "C",
    "text": "パブリック"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "1.1.3 「クラウドモデルとは」",
  "explanation": "パブリッククラウドは、クラウドサービスプロバイダーが提供するサービスをインターネット経由で利用します。\nクラウドサービスプロバイダーが保有、管理しているハードウェア( サーバーやストレージなど ) を複数の顧客と\n共有し、利用した分の料金を支払います。"
 },
 {
  "id": "q216",
  "number": 216,
  "type": "choice",
  "chapter": 4,
  "chapterName": "コンピューティングサービス",
  "text": "問題文中の（）にあてはまるものを選択肢から選んでください。\n（）は、クラウドでホストされる Windows をどこからでも使用できるようにするデスクトップおよびアプリケ\nーションの仮想化サービスです。",
  "choices": [
   {
    "key": "A",
    "text": "可用性セット"
   },
   {
    "key": "B",
    "text": "Azure Spot Virtual Machines"
   },
   {
    "key": "C",
    "text": "Azure Virtual Desktop"
   },
   {
    "key": "D",
    "text": "Azure Virtual Machine Scale Sets"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "4.1.6 「 Azure Virtual Desktop」",
  "explanation": "Azure Virtual Desktop は、ユーザーが使用するためのデスクトップやアプリを仮想化環境で提供するサー\nビスです。Azure Virtual Desktop では、Windows 11 や Windows Server 2022 などさまざまな Windows OS\nを利用できます。"
 },
 {
  "id": "q217",
  "number": 217,
  "type": "choice",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "データセンターでは、1,000 台のＨｙｐｅｒ－Ｖの仮想マシンがホストされています。\nすべての仮想マシンを Az ure の従量課金制サブスクリプションに移行する予定です。\n計画中の Azure ソリューションに適用する支出モデルはなんですか。",
  "choices": [
   {
    "key": "A",
    "text": "運用 (Operational)"
   },
   {
    "key": "B",
    "text": "弾性 (Ｅｌａｓｔｉｃ )"
   },
   {
    "key": "C",
    "text": "資本 (Capital)"
   },
   {
    "key": "D",
    "text": "スケーラブル"
   }
  ],
  "correctAnswers": [
   "A"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "1.1． 2 「クラウドを利用するメリット」",
  "explanation": "オンプレミスのデータセンターで運用している Hyper-V 仮想マシンにはハードウェアなどの設備投資が発生\nしているため、支出モデルは「資本的支出 (Capital Expenditure： CapEx)」になります。それを Azure に移行す\nると、設備投資は不要となり代わりに月々発生する運用コスト(Operational Expenditure： OpEx)が発生しま\nす。"
 },
 {
  "id": "q218",
  "number": 218,
  "type": "truefalse",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。\n誤っている場合は「いいえ」を選択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Platform as a Service (PaaS) ソリューションは、アプリケーションをホストするオペレーティングシステムのフルコントロールアクセスを提供します。",
   "Platform as a Service (PaaS) ソリューションは、価格帯を変更することでアプリに追加のメモリを提供します。",
   "Platform as a Service (PaaS) ソリューションは、インスタンスの数を自動的にスケーリングできます。"
  ],
  "tfAnswers": [
   "いいえ",
   "はい",
   "はい"
  ],
  "review": "1.2.2 「 PaaS (Platform as a Service)」",
  "explanation": "PaaS は、アプリをホストするインスタンス(仮想マシン)の OS の管理は、クラウドサービス事業者が行います。\nしたがって、利用者は O S を管理できません。\nまた、PaaS は価格帯を上位のものに変更すると(スケールアップ)、CPU やメモリ、利用できる機能が追加さ\nれます。\nそして App Service などの PaaS のサービスには、インスタンスの数を自動的に増減させる自動スケール機\n能があります。"
 },
 {
  "id": "q219",
  "number": 219,
  "type": "choice",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "会社では、Azure に複数のカスタムアプリケーションを導入する予定です。これらのアプリケーションは、会\n社の顧客に請求サービスを提供するものです。各アプリケーションには、いくつかの前提条件となるアプリケ\nーションとサービスがインストールされます。すべてのアプリケーションに適したクラウド導入ソリューションを\n推奨する必要があります。\nどのようなソリューションを推奨すべきですか。",
  "choices": [
   {
    "key": "A",
    "text": "Software as a Service (SaaS)"
   },
   {
    "key": "B",
    "text": "Platform as a Service (PaaS)"
   },
   {
    "key": "C",
    "text": "Infrastructure as a Service (IaaS)"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "1.2 「クラウドコンピューティングのサービスモデル」",
  "explanation": "Azure でカスタムアプリケーションを導入するには、PaaS または IaaS になります。PaaS はアプリケーション\nに必要なミドルウェアまで提供されるため、カスタムアプリケーションに必要なアプリケーションとサービスを入\nれることができません。したがって、選択するのは IaaS になります。"
 },
 {
  "id": "q220",
  "number": 220,
  "type": "truefalse",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。\n誤っている場合は「いいえ」を選択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "データセンターインフラストラクチャを構築することは、運用支出コスト (O perating Expenditure ： OpEx) の一例です。",
   "技術者の月給は、運用支出コスト(Operating Expenditure： OpEx)の一例です。",
   "ソフトウェアのリース料は、運用支出コスト(Operating Expenditure： OpEx)の一例です。"
  ],
  "tfAnswers": [
   "いいえ",
   "はい",
   "はい"
  ],
  "review": "1． 1.2 「クラウドを利用するメリット」",
  "explanation": "データセンターインフラストラクチャの構築は、設備投資になるため資本支出 (Capital Expenditure:CapEx)\nになります。\n技術者の月給は、毎月支払う運用高ストになるため、運用支出コスト(Operating Expenditure： OpEx)にな\nります。\nそして、ソフトウェアのリース料も定期的 ( 毎月など ) に利用料を支払うため、運用支出コスト (Operating\nExpenditure： OpEx)になります。"
 },
 {
  "id": "q221",
  "number": 221,
  "type": "truefalse",
  "chapter": 2,
  "chapterName": "Azureの基礎・コスト管理",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。\n誤っている場合は「いいえ」を選択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "リソースグループの中にリソースグループを作成できます。",
   "１つの Azure 仮想マシンを複数のリソースグループに存在できます。",
   "リソースグループは、複数の Azure リージョンのリソースを格納できます。"
  ],
  "tfAnswers": [
   "いいえ",
   "いいえ",
   "はい"
  ],
  "review": "2.3.1 「リソースとリソースグループ」",
  "explanation": "リソースグループの中にリソースグループを作成できません。\nまた、１つのリソースを同時に複数のリソースグループに存在させることはできません。\nそしてリソースグループには、複数の異なるリージョンのリソースを格納することができます。"
 },
 {
  "id": "q222",
  "number": 222,
  "type": "truefalse",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。\n誤っている場合は「いいえ」を選択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Azure 仮想マシンにインストールされている Microsoft SQL Server 2019 は、 Platform as a Service (PaaS) の一例です。",
   "Azure SQL Database は、Platform as a Service (PaaS)の一例です。",
   "Azure Cosmos DB は、Software as a Service (SaaS)の一例です。"
  ],
  "tfAnswers": [
   "いいえ",
   "はい",
   "いいえ"
  ],
  "review": "1.2 「クラウドコンピューティングのサービスモデル」",
  "explanation": "Azure 仮想マシンにインストールされている Microsoft SQL Server 2019 は、Azure の仮想マシンなので\nInfrastructure as a Service (IaaS)になります。\nまた、Azure SQL Database は、SQL Server を用意しなくても SQL データベースを作成できる PaaS のサー\nビスです。\nそして、Azure Cosmos DB も PaaS のサービスになります。"
 },
 {
  "id": "q223",
  "number": 223,
  "type": "choice",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "会社では、すべてのデータとリソースを Azure に移行する計画を立てています。\n会社の移行計画では、Azure では Platform as a Service（ PaaS）ソリューションのみを使用することが定めら\nれています。会社の移行計画を満たす Azure 環境をデプロイする必要があります。\nどのような環境を構築すればよいですか。",
  "choices": [
   {
    "key": "A",
    "text": "Azure 仮想マシン、Azure SQL Database、Azure ストレージアカウント"
   },
   {
    "key": "B",
    "text": "Azure App Service、Microsoft SQL Server がインストールされた Azure 仮想マシン"
   },
   {
    "key": "C",
    "text": "Azure App Service と Azure SQL Database"
   },
   {
    "key": "D",
    "text": "Azure 仮想マシン内の Azure ストレージアカウントと Web サーバー"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "1.2.2 「 PaaS (Platform as a Service)」",
  "explanation": "Azure 仮想マシンは IaaS のサービスです。選択肢の中で Azure 仮想マシンが含まれていないのは C になり\nます。",
  "supplement": "Azure 仮想マシンは IaaS（インフラだけを借りる形態）の代表例です。PaaS（App Service など土台込み）や SaaS（完成済みアプリ）と混同しやすいので、「VM＝自分で OS を管理＝IaaS」とセットで覚えると確実です。",
  "diagram": "service-models"
 },
 {
  "id": "q224",
  "number": 224,
  "type": "choice",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "レガシーデータベースを使用する会計アプリケーション「 App1」があります。App1 をクラウドに移行する予\n定です。どのサービスモデルを使用すべきですか。",
  "choices": [
   {
    "key": "A",
    "text": "Platform as a Service (PaaS)"
   },
   {
    "key": "B",
    "text": "Infrastructure as a Service (IaaS)"
   },
   {
    "key": "C",
    "text": "Software as a Service (SaaS)"
   }
  ],
  "correctAnswers": [
   "B"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "1.2 「クラウドコンピューティングのサービスモデル」",
  "explanation": "レガシーデータベースを使用するには、レガシーデータベースのソフトウェアを入れる必要があります。したが\n\fって、仮想マシンを作成し、仮想マシンにレガシーデータベース用のソフトウェアをインストールします。使用す\nべきサービスモデルは、IaaS です。"
 },
 {
  "id": "q225",
  "number": 225,
  "type": "choice",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "問題文中の（）にあてはまるものを選択肢から選んでください。\nクラウドでホストされ、Azure によってソフトウェア更新が管理される Microsoft SQL Server Database は、\n（）の一例です。",
  "choices": [
   {
    "key": "A",
    "text": "Disaster Recovery as a Service (DRaaS)"
   },
   {
    "key": "B",
    "text": "Infrastructure as a Service (IaaS)"
   },
   {
    "key": "C",
    "text": "Platform as a Service (PaaS)"
   },
   {
    "key": "D",
    "text": "Software as a Service (SaaS)"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "1.2 「クラウドコンピューティングのサービスモデル」",
  "explanation": "クラウドでホストされ、Azure によってソフトウェア更新が管理されるデータベースのサービスということなの\nで、正解は PaaS になります。"
 },
 {
  "id": "q226",
  "number": 226,
  "type": "choice",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "クラウドコンピューティングのメリットは何ですか。正しいものを２つ選択してください。",
  "choices": [
   {
    "key": "A",
    "text": "リソースの迅速なプロビジョニングを可能にする"
   },
   {
    "key": "B",
    "text": "管理の複雑さが増す"
   },
   {
    "key": "C",
    "text": "オンプレミスと同じ構成オプションがある"
   },
   {
    "key": "D",
    "text": "資本的支出（ CAPEX）を運用的支出（ OPEX）にシフトする"
   }
  ],
  "correctAnswers": [
   "A",
   "D"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "1． 1.2 「クラウドを利用するメリット」",
  "explanation": "クラウドコンピューティングのメリットとしては、次のようなものがあります。\n•コスト削減（資本的支出から運用支出へ）\n•障害対策機能（高可用性、フォールトトレランス、災害対策など）\n•高いスケーラビリティ（自動スケール機能など）\n•機敏性のあるシステム構築（管理ポータルからの簡単な操作）\nしたがって、正解は A と D です。"
 },
 {
  "id": "q227",
  "number": 227,
  "type": "choice",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "最小限のダウンタイムでクラウドベースのアプリケーションへの継続的なユーザーアクセスが実現するのは、\n次の選択肢のどのクラウドコンピューティングの利点ですか。",
  "choices": [
   {
    "key": "A",
    "text": "機敏性 (Agility)"
   },
   {
    "key": "B",
    "text": "スケーラビリティ"
   },
   {
    "key": "C",
    "text": "弾力性 (Elasticity)"
   },
   {
    "key": "D",
    "text": "高可用性"
   }
  ],
  "correctAnswers": [
   "D"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "1.1.2 「クラウドを利用するメリット」",
  "explanation": "高可用性とは可用性が高い状態のことで、システムが停止する頻度や時間が極力少ないことを指します。",
  "supplement": "「高可用性＝止まりにくさ」です。1 台に頼らず、可用性ゾーン（独立したデータセンター）へ分散させることで、障害が起きても全体は動き続けます。",
  "diagram": "availability-zones"
 },
 {
  "id": "q228",
  "number": 228,
  "type": "choice",
  "chapter": 2,
  "chapterName": "Azureの基礎・コスト管理",
  "text": "Azure 環境で複数の Azure SQL マネージドインスタンスを作成しようとしたところ、Azure サブスクリプショ\nンの制限を増やす必要があるというメッセージが表示されました。\n制限を増やすにはどうすればよいですか。",
  "choices": [
   {
    "key": "A",
    "text": "Service Health Alert を作成する"
   },
   {
    "key": "B",
    "text": "サポートプランをアップグレードする"
   },
   {
    "key": "C",
    "text": "Azure ポリシーを変更する"
   },
   {
    "key": "D",
    "text": "新しいサポートリクエストを作成する"
   }
  ],
  "correctAnswers": [
   "D"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "2.2.3 「サブスクリプションの取得」",
  "explanation": "サブスクリプションで作成できるリソースの数には上限が設けられており、上限を超えてリソースを作成す\nることはできません。これをサブスクリプションの「クォータ」と呼びます。クォータ値以上のリソースを作成した\nい場合は、サポートリクエストを作成しクォータの増加を要求します。"
 },
 {
  "id": "q230",
  "number": 230,
  "type": "truefalse",
  "chapter": 6,
  "chapterName": "ストレージサービス",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。\n誤っている場合は「いいえ」を選択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Azure ストレージアカウントに格納されているデータは、自動的に最低でも３つのデータコピーを持ちます。",
   "Azure ストレージアカウントに格納されているデータは、他の Azure のデータセンターに自動的にバックアップされます。",
   "Azure ストレージアカウントには、最大 2 TB のデータと最大 100 万個のファイルを含めることができます。"
  ],
  "tfAnswers": [
   "はい",
   "いいえ",
   "いいえ"
  ],
  "review": "6.1.1 「ストレージアカウントとは」",
  "explanation": "Azure ストレージアカウントに格納されるデータは、ストレージアカウントの冗長化オプション(6 種類 )で何が\n選択されているかによりデータの冗長化方法が決まります。たとえば、LRS が選択されている場合は同じリー\nジョンの同じデータセンターにデータコピーが３つ作成されます。また GRS が選択されている場合はリージョン\nペアにも３つデータコピーが作成されるため、計 6 つのデータコピーが作成されます。LRS が一番低コストの冗\n長化オプションになり、データコピーが３つ作成されます。\nストレージアカウントの冗長化オプションで、LRS や ZRS が選択されている場合は、他のリージョンにはデー\nタコピーが作成されません。\nストレージアカウントの既定の最大容量は 5PiB(ぺピバイト)で、保存できるデータの個数に制限はありませ\nん。したがって、２ TB のデータと 100 万個のファイルを格納できます。"
 },
 {
  "id": "q231",
  "number": 231,
  "type": "choice",
  "chapter": 3,
  "chapterName": "Azureの管理ツール・ガバナンス基礎",
  "text": "問題文中の（）にあてはまるものを選択肢から選んでください。\n（）は、オンプレミスの M icrosoft SQL サーバーを Azure に移行することで電力消費が削減され、コストがど\nれだけ節約されるかを計算できます。",
  "choices": [
   {
    "key": "A",
    "text": "Azure Migrate : サーバー評価ツール"
   },
   {
    "key": "B",
    "text": "総保有コスト (TCO) 計算ツール"
   },
   {
    "key": "C",
    "text": "Database Migration Assistant ツール"
   },
   {
    "key": "D",
    "text": "Azure 料金計算ツール"
   }
  ],
  "correctAnswers": [
   "B"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "3.5.2 「料金計算ツールと総保有コスト(TCO)計算ツール」",
  "explanation": "総保有コスト (TCO) 計算ツールは、現状オンプレミスで発生しているコストを入力し、Azure に移行した場合\nにどれくらいのコストの削減が見込まれるかを予測するツールです。"
 },
 {
  "id": "q232",
  "number": 232,
  "type": "choice",
  "chapter": 1,
  "chapterName": "クラウドの概念",
  "text": "問題文中の（）にあてはまるものを選択肢から選んでください。\n\f     最大 20 個のインスタンスをサポートするクラウドサービスは、最大 5 個のインスタンスをサポートする\nサービスよりも（）です。",
  "choices": [
   {
    "key": "A",
    "text": "分散型"
   },
   {
    "key": "B",
    "text": "スケーラブル"
   },
   {
    "key": "C",
    "text": "安全"
   }
  ],
  "correctAnswers": [
   "B"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "1.1.2 「クラウドを利用するメリット」",
  "explanation": "スケーラビリティとは、需要の変化に対応するために、IT リソースの増減を柔軟に行えるかどうかの度合い\nのことです。最大 20 個のインスタンスをサポートするクラウドサービスは、最大 5 個のインスタンスしかサポー\nトしないサービスよりもスケーラビリてぃが高いといえます。"
 },
 {
  "id": "q233",
  "number": 233,
  "type": "choice",
  "chapter": 2,
  "chapterName": "Azureの基礎・コスト管理",
  "text": "複数の Azure 仮想マシンをデプロイする予定です。単一のデータセンターに障害が発生した場合でも、仮想\nマシン上で実行されているサービスが引き続き利用可能であることを保証する必要があります。\n考えられる解決策を 2 つ挙げてください。",
  "choices": [
   {
    "key": "A",
    "text": "仮想マシンを２つ以上の可用性ゾーンにデプロイします。"
   },
   {
    "key": "B",
    "text": "仮想マシンを２つ以上のリソースグループにデプロイします。"
   },
   {
    "key": "C",
    "text": "仮想マシンをスケールセットにデプロイします。"
   },
   {
    "key": "D",
    "text": "仮想マシンを２つ以上のリージョンにデプロイします。"
   }
  ],
  "correctAnswers": [
   "A",
   "D"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "2.1.4 「可用性ゾーン」",
  "explanation": "一部の大きなリージョンには、低遅延のネットワークで結ばれた３つのゾーンが構成されており、１つのゾー\nンには独立した電源、ネットワークなどを備えたデータセンターが１つ以上存在します。各ゾーンのことを「可\n用性ゾーン」と呼びます。仮想マシンを各ゾーンに分散して配置すると、データセンターの障害が発生したとし\nても、他の可用性ゾーンにも仮想マシンが展開されているため、引き続き仮想マシン上で実行されているサー\n\fビスにアクセスできます。\nまた、異なるリージョンに複数の仮想マシンをデプロイした場合も、データセンターの障害に対応できます。"
 },
 {
  "id": "q234",
  "number": 234,
  "type": "truefalse",
  "chapter": 6,
  "chapterName": "ストレージサービス",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。\n誤っている場合は「いいえ」を選択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "アーカイブアクセス層は、ストレージアカウントレベルで構成できます。",
   "頻繁にアクセスと更新するデータには、ホットアクセス層が推奨されます。",
   "長期間のバックアップに推奨されるのは、クールアクセス層です。"
  ],
  "tfAnswers": [
   "いいえ",
   "はい",
   "いいえ"
  ],
  "review": "6.1.5 「 BLOB のアクセス層」",
  "explanation": "アーカイブアクセス層は、ストレージアカウントレベルでは設定できません。アーカイブアクセス層は、BLOB 単\n位 (ファイル単位 )で構成できます。\nホットアクセス層は、アクセスコストが最も低いため、頻繁に読み取りや書き込みが行われるデータの保存に\n最適です。\n最もストレージコストが安いのがアーカイブアクセス層です。"
 },
 {
  "id": "q235",
  "number": 235,
  "type": "choice",
  "chapter": 0,
  "chapterName": "その他",
  "text": "Azure サブスクリプションにデプロイするサードパーティ製のネットワーク仮想アプライアンスを購入する必\n要があります。\n何を使用すればよいですか。",
  "choices": [
   {
    "key": "A",
    "text": "Azure サブスクリプション"
   },
   {
    "key": "B",
    "text": "Microsoft Defender for Cloud"
   },
   {
    "key": "C",
    "text": "Azure Marketplace"
   },
   {
    "key": "D",
    "text": "Microsoft ストア"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "",
  "explanation": "Azure 仮想アプライアンスとは、Azur 上で動作する仮想化されたネットワークアプライアンスのことで、ファ\nイアウォール、ロードバランサー、ルーターなどのネットワーク機能を仮想マシン（ VM ）として提供するものです。\nAzure Marketplace を通じて、さまざまなベンダーの製品を Azure 上で利用することができます。"
 },
 {
  "id": "q237",
  "number": 237,
  "type": "choice",
  "chapter": 0,
  "chapterName": "その他",
  "text": "Azure にウェブサイトを展開する予定です。このウェブサイトは世界中のユーザーがアクセスし、大容量の動\n画ファイルをホストする予定です。\n最適な動画再生エクスペリエンスを実現するために、どの Azure 機能を使用すべきですか。",
  "choices": [
   {
    "key": "A",
    "text": "Application Gateway"
   },
   {
    "key": "B",
    "text": "Azure ExpressRoute Circuit"
   },
   {
    "key": "C",
    "text": "コンテンツ配信ネットワーク(CDN)"
   },
   {
    "key": "D",
    "text": "Azure Traffic Manager プロファイル"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "",
  "explanation": "Azure のコンテンツ配信ネットワーク（ Azure CDN）は、Microsoft Azure が提供するコンテンツ配信サービ\nスです。これは、世界中に分散されたサーバーを活用し、 Web サイトやアプリケーションのコンテンツを高速か\nつ効率的に配信するための仕組みです。"
 },
 {
  "id": "q238",
  "number": 238,
  "type": "choice",
  "chapter": 8,
  "chapterName": "ガバナンス・コンプライアンス・監視",
  "text": "Azure 仮想マシンを停止した場合に、アラートを自動的に送信するには何を使用すればよいですか。",
  "choices": [
   {
    "key": "A",
    "text": "Azure Advisor"
   },
   {
    "key": "B",
    "text": "Azure サービス正常性"
   },
   {
    "key": "C",
    "text": "Azure モニター"
   },
   {
    "key": "D",
    "text": "Azure Network Watcher"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "8.2.3 「 Azure Monitor(モニター)」",
  "explanation": "Azure Monitor は Azure の監視用のサービスです。Azure Monitor にはアラート機能があり、Azure リソー\nスで何か問題が発生した場合に管理者に通知を送信したり、問題に対応するためのアクションを実行するこ\nとができます。"
 },
 {
  "id": "q239",
  "number": 239,
  "type": "truefalse",
  "chapter": 8,
  "chapterName": "ガバナンス・コンプライアンス・監視",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。\n誤っている場合は「いいえ」を選択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Azure Advisor は、Microsoft Entra 環境のセキュリティを向上するための推奨事項を提供します。",
   "Azure Advisor は、稼働している Azure 仮想マシンのコストを削減するための推奨事項を提供します。",
   "Azure Advisor は、Azure 仮想マシン上のネットワーク設定を構成する方法に関する推奨事項を提供します。"
  ],
  "tfAnswers": [
   "はい",
   "はい",
   "はい"
  ],
  "review": "8.2.1 「 Azure Advisor」",
  "explanation": "Azure Advisor は、サブスクリプション内にある Azure リソースの構成や利用統計情報を分析し、コストの\n費用対効果、セキュリティ、信頼性 (高可用性 )、パフォーマンスを向上させるための推奨事項を提供します。し\nたがって、①と②は「はい」になります。\nまた Microsoft Defender for Cloud と連携して仮想マシンに関する推奨事項も提供されます。したがっ\nて、③も「はい」になります。"
 },
 {
  "id": "q240",
  "number": 240,
  "type": "choice",
  "chapter": 0,
  "chapterName": "その他",
  "text": "問題文中の（）にあてはまるものを選択肢から選んでください。\n（）からコンプライアンスマネージャーにアクセスできます。",
  "choices": [
   {
    "key": "A",
    "text": "Microsoft Entra 管理センター"
   },
   {
    "key": "B",
    "text": "Azure portal"
   },
   {
    "key": "C",
    "text": "Microsoft 365 管理センター"
   },
   {
    "key": "D",
    "text": "Microsoft Service Trust Portal"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "",
  "explanation": "コンプライアンスマネージャーは、Microsoft 365 のコンプライアンス管理ツールです。Microsoft 365 管理セ\nンターなどからアクセスできます。"
 },
 {
  "id": "q241",
  "number": 241,
  "type": "truefalse",
  "chapter": 3,
  "chapterName": "Azureの管理ツール・ガバナンス基礎",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。\n誤っている場合は「いいえ」を選択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Azure Cost Management を使用して、管理グループに関連付けられたコストを表示できます。",
   "Azure Cost Management を使用して、リソースグループに関連付けられたコストを表示できます。",
   "Azure Cost Management を使用すると、過去 3 か月間の仮想マシンの使用状況を表示できます。"
  ],
  "tfAnswers": [
   "はい",
   "はい",
   "はい"
  ],
  "review": "3.5.3 「コストの管理ツール」",
  "explanation": "コスト管理を使用すると、コストの集計のスコープを「管理グループ」、「サブスクリプション」、\n「リソースグループ」などに変更して料金を確認することができます。したがって、①と②は「はい」になります。\nまた、対象を特定の Azure のリソースに変更することにより、仮想マシンなど特定のリソースのコスト\n（使用状態）を表示できます。期間も変更可能です。したがって③も「はい」になります。"
 },
 {
  "id": "q243",
  "number": 243,
  "type": "choice",
  "chapter": 8,
  "chapterName": "ガバナンス・コンプライアンス・監視",
  "text": "問題文中の（）にあてはまるものを選択肢から選んでください。\n（）は、Microsoft クラウド製品全体のセキュリティ、プライバシー、コンプライアンスオファリング、\nポリシー、機能に関する詳細な情報が提供されます。",
  "choices": [
   {
    "key": "A",
    "text": "Microsoft 365 コンプラインス管理センター"
   },
   {
    "key": "B",
    "text": "Microsoft 365 Defender ポータル"
   },
   {
    "key": "C",
    "text": "Azure portal の Microsoft Defender for Cloud"
   },
   {
    "key": "D",
    "text": "トラストセンター"
   }
  ],
  "correctAnswers": [
   "D"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "8.1.4 「 Service Trust Portal とトラストセンター」",
  "explanation": "トラストセンターは、マイクロソフトのクラウドサービスにおけるセキュリティ、コンプライアンス、プライバシ\nーに関する詳細情報を公開している Web サイトです。"
 },
 {
  "id": "q244",
  "number": 244,
  "type": "choice",
  "chapter": 0,
  "chapterName": "その他",
  "text": "Windows Server 2016 を実行する VM1 という仮想マシンがあります。VM1 は米国東部リージョンにありま\nす。VM1 の可用性に影響を与える可能性のあるサービス障害通知を表示するには、Azure portal からどの\nAzure サービスを使用すればよいですか。",
  "choices": [
   {
    "key": "A",
    "text": "Azure Service Fabric"
   },
   {
    "key": "B",
    "text": "Azure Monitor"
   },
   {
    "key": "C",
    "text": "Azure 仮想マシン"
   },
   {
    "key": "D",
    "text": "Azure Advisor"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "",
  "explanation": "Azure portal の［仮想マシン］画面で、［メンテナンス］‐［仮想マシンのメンテナンス］をクリックすると、各\n仮想マシンのメンテナンスの状態やメンテナンスのスケジュールを確認することができます。"
 },
 {
  "id": "q245",
  "number": 245,
  "type": "choice",
  "chapter": 7,
  "chapterName": "ID・アクセス・セキュリティ",
  "text": "問題文中の（）にあてはまるものを選択肢から選んでください。\nAzure DDoS 保護は、（）で実装される保護サービスの一例です。",
  "choices": [
   {
    "key": "A",
    "text": "アプリケーション層"
   },
   {
    "key": "B",
    "text": "コンピュート層"
   },
   {
    "key": "C",
    "text": "ネットワーク層"
   },
   {
    "key": "D",
    "text": "境界層"
   }
  ],
  "correctAnswers": [
   "D"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "7.2.2 「多層防御」",
  "explanation": "多層防御は情報システムのセキュリティ対策方針のうちの１つで、「複数のレイヤーごとにセキュリティ対\n策を施す」という考え方です。多層防御には、次のレイヤー(層 )があります。\n•物理的なセキュリティ\n•     ID とアクセス\n•境界\n•ネットワーク\n•コンピューティング\n•アプリケーション\n•データ\nDDoS 保護は、「境界」レイヤーで行うセキュリティ対策になります。"
 },
 {
  "id": "q246",
  "number": 246,
  "type": "choice",
  "chapter": 0,
  "chapterName": "その他",
  "text": "次の要件を満たす Azure ソリューションを構成する必要があります。\n•      Web サイトを攻撃から保護する\n•試行された攻撃の詳細を含むレポートを生成する\nソリューションには何を含める必要がありますか?",
  "choices": [
   {
    "key": "A",
    "text": "Azure Firewall"
   },
   {
    "key": "B",
    "text": "ネットワークセキュリティグループ (NSG)"
   },
   {
    "key": "C",
    "text": "Azure Information Protection"
   },
   {
    "key": "D",
    "text": "DDoS 保護"
   }
  ],
  "correctAnswers": [
   "D"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "",
  "explanation": "Azure DDoS 保護は、A zure の DDoS 攻撃に対応するサービスです。Azure DDoS 保護は、Web サーバー\nを DDo S 攻撃から保護し、攻撃終了後に詳細なレポートを生成します。"
 },
 {
  "id": "q247",
  "number": 247,
  "type": "choice",
  "chapter": 7,
  "chapterName": "ID・アクセス・セキュリティ",
  "text": "問題文中の（）にあてはまるものを選択肢から選んでください。\n（）から会社の規制コンプライアンスレポートを表示できます。",
  "choices": [
   {
    "key": "A",
    "text": "Azure Advisor"
   },
   {
    "key": "B",
    "text": "Azure Analytics Services"
   },
   {
    "key": "C",
    "text": "Azure Monitor"
   },
   {
    "key": "D",
    "text": "Microsoft Defender fo r Cloud"
   }
  ],
  "correctAnswers": [
   "D"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "7.2.3 「 Microsoft Defender for Cloud」",
  "explanation": "Microsoft Defender for Cloud は、クラウドネイティブアプリケーション保護プラットフォーム(CNAPP)で、\nさまざまなサイバー脅威や脆弱性からリソースを保護するのに役立ちます。Microsoft Defender for Cloud は、\nリソースのセキュリティログを収集し、マイクロソフトの機械学習を使って、さまざまな切り口から監視、評価を\n行います。"
 },
 {
  "id": "q248",
  "number": 248,
  "type": "choice",
  "chapter": 0,
  "chapterName": "その他",
  "text": "問題文中の（）にあてはまるものを選択肢から選んでください。\nあなたの会社では、クレジットカード情報が含まれている Microsoft Word ドキュメントに自動的に透かしを追\n加する（）を実装しています。",
  "choices": [
   {
    "key": "A",
    "text": "Azure ポリシー"
   },
   {
    "key": "B",
    "text": "DDoS 保護"
   },
   {
    "key": "C",
    "text": "Azure Information Protection"
   },
   {
    "key": "D",
    "text": "Microsoft Entra Identity Protection"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "",
  "explanation": "Azure Information Protection とは、Microsoft が提供する情報漏洩対策ソリューションです。主に電子メ\nールや文書の機密情報を保護するためのサービスであり、Microsoft 365 内で利用可能です。機密情報とし\nてクレジットカード番号などを指定すると、メールや Office アプリ(Word など)でその機密情報が検出された\nら、秘密度ラベルを適用して自動的に暗号化したり、機密情報ということを強調するためにヘッダー、フッタ\nー、透かしなど(メールは対象外 )を自動的に追加するように構成できます。"
 },
 {
  "id": "q249",
  "number": 249,
  "type": "choice",
  "chapter": 0,
  "chapterName": "その他",
  "text": "Azure Information Protection では何を暗号化できますか?",
  "choices": [
   {
    "key": "A",
    "text": "ネットワークトラフィック"
   },
   {
    "key": "B",
    "text": "文書と電子メールメッセージ"
   },
   {
    "key": "C",
    "text": "Azure ストレージアカウント"
   },
   {
    "key": "D",
    "text": "Azure SQL Database"
   }
  ],
  "correctAnswers": [
   "B"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "",
  "explanation": "Azure Information Protection とは、Microsoft が提供する情報漏洩対策ソリューションです。主に電子メ\nールや文書の機密情報を保護するためのサービスです。"
 },
 {
  "id": "q250",
  "number": 250,
  "type": "choice",
  "chapter": 0,
  "chapterName": "その他",
  "text": "Azure サブスクリプションを持っています。Micro soft が収集する個人データ、Microsoft によるデータの使\n用方法、そしてそのデータの使用目的に関する詳細はどこで確認できますか？",
  "choices": [
   {
    "key": "A",
    "text": "Data Protection Addendum(データ保護補足契約 :DPA)"
   },
   {
    "key": "B",
    "text": "Microsoft Online Services Term(製品規約 )"
   },
   {
    "key": "C",
    "text": "Microsoft Privacy Statement"
   },
   {
    "key": "D",
    "text": "Microsoft Defender for Cloud"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "",
  "explanation": "Privacy Statement では、Microsoft によって処理される個人データの種類、処理方法、使用目的について説\n明しています。"
 },
 {
  "id": "q251",
  "number": 251,
  "type": "choice",
  "chapter": 8,
  "chapterName": "ガバナンス・コンプライアンス・監視",
  "text": "問題文中の（）にあてはまるものを選択肢から選んでください。\nRG1 というリソースグループに、VNet1 という Azure 仮想ネットワークがあります。Azure Policy 定義「許\n可されていないリソースの種類」を割り当て、RG1 では仮想ネットワークが許可されていないリソースの種類\nであることを指定します。VNet1 は（）。",
  "choices": [
   {
    "key": "A",
    "text": "自動的に削除されます。"
   },
   {
    "key": "B",
    "text": "他のリソースグループに自動的に移動されます。"
   },
   {
    "key": "C",
    "text": "引き続き正常に動作します。"
   },
   {
    "key": "D",
    "text": "読み取り専用オブジェクトとして動作します。"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "8.1.1 「 Azure Policy」",
  "explanation": "既存のリソースに Azure Policy を割り当てても、自動的に削除されたり、移動したり、読み取り専用にな\nることはありません。既存のリソースは、そのまま動作し続けます。"
 },
 {
  "id": "q253",
  "number": 253,
  "type": "choice",
  "chapter": 7,
  "chapterName": "ID・アクセス・セキュリティ",
  "text": "会社の Azure 環境が規制要件を満たしているかどうかを評価するには何を使用すればよいでしょうか。",
  "choices": [
   {
    "key": "A",
    "text": "Azure Service Health"
   },
   {
    "key": "B",
    "text": "Azure ナレッジセンター"
   },
   {
    "key": "C",
    "text": "Microsoft Defender for Cloud"
   },
   {
    "key": "D",
    "text": "Azure Advisor"
   }
  ],
  "correctAnswers": [
   "C"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "7.2.3 「 Microsoft Defender for Cloud」",
  "explanation": "Microsoft Defender for Cloud は、クラウドネイティブアプリケーション保護プラットフォーム(CNAPP)で、さ\nまざまなサイバー脅威や脆弱性からリソースを保護するのに役立ちます。Microsoft Defender for Cloud は、\nリソースのセキュリティログを収集し、マイクロソフトの機械学習を使って、さまざまな切り口から監視、評価を\n行います。\nDefender for Cloud の［規制コンプライアンスダッシュボード］では、ISO27001、NIST SP800-53 などのコン\nプライアンス要件を満たしているかどうかを一覧表示します。"
 },
 {
  "id": "q254",
  "number": 254,
  "type": "choice",
  "chapter": 8,
  "chapterName": "ガバナンス・コンプライアンス・監視",
  "text": "問題文中の（）にあてはまるものを選択肢から選んでください。\n（）から、Azure サービスの監査レポートとコンプライアンス関連の情報を確認できます。",
  "choices": [
   {
    "key": "A",
    "text": "Microsoft Defender for Cloud"
   },
   {
    "key": "B",
    "text": "Microsoft Defender for Identity 管理センター"
   },
   {
    "key": "C",
    "text": "Microsoft 365 Purview コンプライアンスポータル"
   },
   {
    "key": "D",
    "text": "Microsoft Service Trust Portal"
   }
  ],
  "correctAnswers": [
   "D"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "8.1.4 「 Service Trust Portal とトラストセンター」",
  "explanation": "Service Trust Portal は、マイクロソフトのクラウドサービスが取得した国際規格の認定 (ISO や PCI など)に\nついての監査レポートやホワイトペーパーなどのコンプライアンスに関連する情報を公開している Web サイト\nです。"
 },
 {
  "id": "q255",
  "number": 255,
  "type": "truefalse",
  "chapter": 7,
  "chapterName": "ID・アクセス・セキュリティ",
  "text": "次の各ステートメントについて、正しければ「はい」を選択してください。\n誤っている場合は「いいえ」を選択してください。",
  "choices": [],
  "correctAnswers": [],
  "statements": [
   "Microsoft Entra ID でグループポリシーを作成できます。",
   "Microsoft Entra ID に W indows 10 デバイスを参加できます。",
   "Microsoft Entra ID に A ndroid デバイスを参加できます。"
  ],
  "tfAnswers": [
   "いいえ",
   "はい",
   "いいえ"
  ],
  "review": "7.1.2 「 Azure Active Directory(Microsoft Entra ID)」",
  "explanation": "Microsoft Entra ID は、グループポリシーの機能を持っていません。デバイスに制限をかけたい場合は、\nMicrosoft Intune を使用する必要があります。\nMicrosoft Entra ID には、Windows 10 や Windows 11 デバイスを参加できます。\nMicrosoft Entra ID には、Windows 以外のデバイスを参加させることはできません。代わりに Microsoft\nEntra 登録を行います。"
 },
 {
  "id": "q256",
  "number": 256,
  "type": "choice",
  "chapter": 8,
  "chapterName": "ガバナンス・コンプライアンス・監視",
  "text": "問題文中の（）にあてはまるものを選択肢から選んでください。\nRG1 リソースグループに削除ロックがセットされている場合は、（）。",
  "choices": [
   {
    "key": "A",
    "text": "RG1 を削除できるのはグローバル管理者グループのメンバーだけです"
   },
   {
    "key": "B",
    "text": "管理者が RG1 を削除する前に、削除ロックを解除する必要があります"
   },
   {
    "key": "C",
    "text": "管理者が RG1 を削除する前に Azure ポリシーを変更する必要があります"
   },
   {
    "key": "D",
    "text": "管理者が RG1 を削除する前に Azure タグを追加する必要があります"
   }
  ],
  "correctAnswers": [
   "B"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "8.1.2 「リソースロック」",
  "explanation": "削除ロックがセットされたリソースを削除するには、削除ロックを削除してから行う必要があります。"
 },
 {
  "id": "q257",
  "number": 257,
  "type": "choice",
  "chapter": 3,
  "chapterName": "Azureの管理ツール・ガバナンス基礎",
  "text": "あなたの会社は Microsoft SQL Serve ライセンスを含むソフトウェアアシュアランス契約を締結しています。\nAzure 仮想マシンに SQL Server を展開する予定です。\n展開にかかるライセンスコストを最小限に抑えるには、どうすればよいでしょうか？",
  "choices": [
   {
    "key": "A",
    "text": "営業時間外に仮想マシンの割り当てを解除します。"
   },
   {
    "key": "B",
    "text": "Azure ハイブリッド特典を使用します。"
   },
   {
    "key": "C",
    "text": "Azure Cost Mamanagement の予算を構成します。"
   },
   {
    "key": "D",
    "text": "Azure 予約を使用します。"
   }
  ],
  "correctAnswers": [
   "B"
  ],
  "statements": [],
  "tfAnswers": [],
  "review": "3.5.1 「 Azure のコストに与える要因について」",
  "explanation": "Azure ハイブリッド特典とは、ソフトウェアアシュアランス契約 (SA 契約 )付きのマイクロソフト製品を利用し\nている場合に、Azure で受けられる割引です。"
 }
];
