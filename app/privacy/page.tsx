import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          ホームに戻る
        </Link>

        <h1 className="text-3xl font-bold text-foreground mb-8">プライバシーポリシー</h1>
        
        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
          <p className="text-muted-foreground">最終更新日: 2026年1月19日</p>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">1. はじめに</h2>
            <p className="text-foreground/90">
              PrincipleNote（以下「本アプリ」）は、ユーザーのプライバシーを尊重し、個人情報の保護に努めています。
              本プライバシーポリシーは、本アプリがどのように情報を収集、使用、保護するかについて説明します。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">2. 収集する情報</h2>
            <p className="text-foreground/90">
              本アプリは、以下の情報を収集する場合があります：
            </p>
            <ul className="list-disc pl-6 text-foreground/90 space-y-2">
              <li>ユーザーが作成したノートやメモのデータ</li>
              <li>アプリの使用状況に関する匿名の分析データ</li>
              <li>デバイス情報（OSバージョン、デバイスモデルなど）</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">3. 情報の使用目的</h2>
            <p className="text-foreground/90">
              収集した情報は、以下の目的で使用されます：
            </p>
            <ul className="list-disc pl-6 text-foreground/90 space-y-2">
              <li>アプリのサービス提供および機能の改善</li>
              <li>ユーザーサポートの提供</li>
              <li>アプリのパフォーマンス分析</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">4. データの保管</h2>
            <p className="text-foreground/90">
              ユーザーのノートデータは、お使いのデバイスにローカルで保存されます。
              クラウド同期機能を使用する場合、データは安全に暗号化された状態で保存されます。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">5. 第三者への情報提供</h2>
            <p className="text-foreground/90">
              本アプリは、法令に基づく場合を除き、ユーザーの個人情報を第三者に提供することはありません。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">6. お問い合わせ</h2>
            <p className="text-foreground/90">
              プライバシーに関するご質問やご懸念がある場合は、
              <Link href="/support" className="text-primary underline hover:no-underline">
                サポートページ
              </Link>
              よりお問い合わせください。
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
