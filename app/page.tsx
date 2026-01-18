import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <Image
            src="/icon.png"
            alt="PrincipleNote アイコン"
            width={120}
            height={120}
            className="rounded-2xl"
          />
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            PrincipleNote
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            あなたの大切なアイデアやメモを、シンプルかつ美しく管理できるノートアプリです。
          </p>
        </div>

        <footer className="mt-24 border-t border-border pt-8">
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="/support" className="hover:text-foreground transition-colors">
              サポート
            </Link>
          </nav>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} PrincipleNote. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  )
}
