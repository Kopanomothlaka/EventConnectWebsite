import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I get started with EventConnect?",
    answer: "Getting started is easy! Simply download the app from the App Store or Google Play, create your account, and you can start creating events immediately. The free plan gives you access to all basic features."
  },
  {
    question: "Can I manage multiple events at the same time?",
    answer: "Absolutely! EventConnect allows you to manage multiple events simultaneously. You can switch between events, track different guest lists, and manage all communications from one central dashboard."
  },
  {
    question: "How does the RSVP tracking work?",
    answer: "When you send invitations through EventConnect, guests receive a link to RSVP directly in the app. You can track responses in real-time, send reminders to non-responders, and get detailed attendance analytics."
  },
  {
    question: "Is my event data secure and private?",
    answer: "Yes, we take security very seriously. All data is encrypted in transit and at rest. We comply with GDPR and other privacy regulations. You have full control over your event data and can delete it at any time."
  },
  {
    question: "Can I customize the look of my event invitations?",
    answer: "Premium users can customize their event invitations with custom branding, colors, and logos. Free users have access to beautiful pre-designed templates that work great for most events."
  },
  {
    question: "Does EventConnect work offline?",
    answer: "The app works offline for viewing event details and guest lists. However, real-time features like messaging, RSVP updates, and notifications require an internet connection."
  },
  {
    question: "How do I cancel my subscription?",
    answer: "You can cancel your subscription at any time from your account settings. Your premium features will remain active until the end of your billing cycle, and you'll automatically switch to the free plan."
  },
  {
    question: "Can I integrate EventConnect with other tools?",
    answer: "Yes! EventConnect integrates with popular calendar apps, social media platforms, and email services. Enterprise customers can access additional API integrations for custom workflows."
  }
];

export const FAQ = () => {
  return (
    <section className="py-20 lg:py-32 gradient-feature">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently asked
            <span className="text-gradient"> questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about EventConnect? We've got answers! Can't find what you're looking for? 
            Contact our support team.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-6 py-2 shadow-soft animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};