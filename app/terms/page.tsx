import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
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

        <h1 className="text-3xl font-bold text-foreground mb-8">利用規約</h1>
        
        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
          <p className="text-muted-foreground">最終更新日: 2026年1月19日</p>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">1. 規約への同意</h2>
            <p className="text-foreground/90">
              PrincipleNote（以下「本アプリ」）をダウンロードまたは使用することにより、
              ユーザーは本利用規約に同意したものとみなされます。
              本規約に同意いただけない場合は、本アプリの使用をお控えください。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">2. サービスの説明</h2>
            <p className="text-foreground/90">
              本アプリは、ユーザーがノートやメモを作成、編集、管理するためのモバイルアプリケーションです。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">3. 利用条件</h2>
            <p className="text-foreground/90">
              ユーザーは以下の条件に同意した上で本アプリを利用するものとします：
            </p>
            <ul className="list-disc pl-6 text-foreground/90 space-y-2">
              <li>本アプリを違法な目的で使用しないこと</li>
              <li>本アプリの正常な運営を妨害しないこと</li>
              <li>他のユーザーの権利を侵害しないこと</li>
              <li>本アプリのリバースエンジニアリングを行わないこと</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">4. 知的財産権</h2>
            <p className="text-foreground/90">
              本アプリおよびその関連コンテンツに関するすべての知的財産権は、開発者に帰属します。
              ユーザーが作成したノートの著作権は、ユーザー自身に帰属します。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">5. 免責事項</h2>
            <p className="text-foreground/90">
              本アプリは「現状有姿」で提供されます。開発者は、本アプリの使用に関連して生じた
              いかなる損害についても責任を負いません。データのバックアップはユーザーの責任において行ってください。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">6. 規約の変更</h2>
            <p className="text-foreground/90">
              開発者は、必要に応じて本利用規約を変更する権利を有します。
              重要な変更がある場合は、アプリ内で通知いたします。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">7. 準拠法</h2>
            <p className="text-foreground/90">
              本利用規約は、日本法に準拠し、解釈されるものとします。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">8. お問い合わせ</h2>
            <p className="text-foreground/90">
              本利用規約に関するご質問は、
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
