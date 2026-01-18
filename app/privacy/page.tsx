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
            
            <h3 className="text-lg font-medium text-foreground">2.1 ユーザーが入力するデータ</h3>
            <ul className="list-disc pl-6 text-foreground/90 space-y-2">
              <li>メモ内容（タイトル、本文）：メモ機能の提供のため</li>
              <li>メモのカテゴリ（Principle / Insight / Other）：メモの分類のため</li>
            </ul>
            <p className="text-foreground/90">
              これらのデータは、ローカル（UserDefaults）に保存されます。サインイン時にはFirebase Firestoreにバックアップとして保存されます。
            </p>

            <h3 className="text-lg font-medium text-foreground">2.2 Apple Sign-Inで取得するデータ</h3>
            <ul className="list-disc pl-6 text-foreground/90 space-y-2">
              <li>メールアドレス（任意）：アカウント識別のため</li>
              <li>User ID（Apple提供）：Firebase認証のため</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">3. サードパーティサービス</h2>
            <p className="text-foreground/90">
              本アプリは、以下のサードパーティサービスを使用しています：
            </p>
            <ul className="list-disc pl-6 text-foreground/90 space-y-2">
              <li><strong>Firebase Authentication</strong>：ユーザー認証（Apple ID情報を使用）</li>
              <li><strong>Firebase Firestore</strong>：クラウドバックアップ（メモデータを保存）</li>
              <li><strong>Google AdMob</strong>：広告表示（無料ユーザー向け、広告ID・デバイス情報を使用）</li>
              <li><strong>RevenueCat</strong>：サブスクリプション管理（購入情報を使用）</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">4. データの取り扱い</h2>
            <ul className="list-disc pl-6 text-foreground/90 space-y-2">
              <li><strong>ローカルデータ</strong>：UserDefaultsに保存され、アプリ削除時に消去されます</li>
              <li><strong>クラウドデータ</strong>：サインイン時のみFirestoreに保存され、ユーザー本人のみがアクセス可能です</li>
              <li><strong>広告データ</strong>：Google AdMobのプライバシーポリシーに準拠します</li>
              <li><strong>購入データ</strong>：RevenueCatおよびAppleが管理します</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">5. 情報の使用目的</h2>
            <p className="text-foreground/90">
              収集した情報は、以下の目的で使用されます：
            </p>
            <ul className="list-disc pl-6 text-foreground/90 space-y-2">
              <li>メモ機能の提供およびクラウドバックアップ・復元</li>
              <li>ユーザー認証とアカウント管理</li>
              <li>サブスクリプション管理</li>
              <li>広告の表示（無料ユーザーのみ）</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">6. 第三者への情報提供</h2>
            <p className="text-foreground/90">
              本アプリは、上記のサードパーティサービス以外に、法令に基づく場合を除き、ユーザーの個人情報を第三者に提供することはありません。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">7. お問い合わせ</h2>
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
