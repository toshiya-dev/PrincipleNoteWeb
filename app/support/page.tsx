"use client"

import Link from "next/link"
import { ArrowLeft, Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function SupportPage() {
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

        <h1 className="text-3xl font-bold text-foreground mb-8">サポート</h1>

        <div className="space-y-8">
          {/* FAQ Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                よくある質問
              </CardTitle>
              <CardDescription>
                お問い合わせの前にご確認ください
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>ノートが消えてしまいました</AccordionTrigger>
                  <AccordionContent>
                    アプリを再起動してみてください。それでも解決しない場合は、
                    お問い合わせフォームよりご連絡ください。定期的なバックアップをお勧めします。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>データを別のデバイスに移行したい</AccordionTrigger>
                  <AccordionContent>
                    設定画面からエクスポート機能を使用してデータをバックアップし、
                    新しいデバイスでインポートしてください。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>アプリが起動しません</AccordionTrigger>
                  <AccordionContent>
                    まずデバイスを再起動してみてください。問題が続く場合は、
                    アプリを削除して再インストールしてください（データのバックアップを先に行ってください）。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>購入の復元方法を教えてください</AccordionTrigger>
                  <AccordionContent>
                    設定画面の「購入を復元」ボタンをタップしてください。
                    Apple IDにサインインしていることを確認してください。
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                お問い合わせ
              </CardTitle>
              <CardDescription>
                上記のFAQで解決しない場合は、以下のフォームよりお問い合わせください
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">メールアドレス</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">件名</Label>
                  <Input 
                    id="subject" 
                    type="text" 
                    placeholder="お問い合わせの件名"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">メッセージ</Label>
                  <Textarea 
                    id="message" 
                    placeholder="お問い合わせ内容をご記入ください"
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  送信する
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Direct Contact */}
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground text-center">
                直接メールでのお問い合わせ：{" "}
                <a 
                  href="mailto:support@principlenote.app" 
                  className="text-primary underline hover:no-underline"
                >
                  support@principlenote.app
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
