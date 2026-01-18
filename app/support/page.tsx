import Image from "next/image"
import Link from "next/link"

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <Image
            src="/icon.png"
            alt="PrincipleNote"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="font-medium text-foreground">PrincipleNote</span>
        </Link>

        <h1 className="text-3xl font-bold text-foreground mb-12">サポート</h1>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">お問い合わせ</h2>
            <p className="text-muted-foreground leading-relaxed">
              ご質問、ご要望、不具合のご報告は以下のメールアドレスまでお送りください。
            </p>
          </section>

          <div className="py-4">
            <a
              href="mailto:annualplanner12@gmail.com"
              className="text-primary underline hover:no-underline text-lg"
            >
              annualplanner12@gmail.com
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            ※通常、2〜3営業日以内にご返信いたします。
          </p>
        </div>
      </div>
    </main>
  )
}
