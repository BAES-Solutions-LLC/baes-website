import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { CheckCircle2, Mail, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function ThankYou() {
  const [, navigate] = useLocation();
  const [path, params] = useLocation();
  const userName = params.name as string || 'there';

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full">
        <CardContent className="p-8 md:p-12">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-green-100 p-4">
              <CheckCircle2 className="h-16 w-16 text-green-600" />
            </div>
          </div>

          {/* Main Message */}
          <div className="text-center space-y-4 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Thank You, {userName}!
            </h1>
            <p className="text-lg text-muted-foreground">
              Your registration has been successfully submitted.
            </p>
          </div>

          {/* What's Next Section */}
          <div className="space-y-6 mb-8">
            <div className="border-t pt-6">
              <h2 className="text-xl font-semibold text-foreground mb-4 text-center">
                What Happens Next?
              </h2>
              
              <div className="space-y-4">
                {/* Step 1 */}
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="rounded-full bg-accent/10 p-2">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">1. Email Confirmation</h3>
                    <p className="text-sm text-muted-foreground">
                      You'll receive a confirmation email shortly with your registration details.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="rounded-full bg-accent/10 p-2">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">2. Account Review</h3>
                    <p className="text-sm text-muted-foreground">
                      Our team will review your application and verify your MT5 credentials. This typically takes 24-48 hours.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="rounded-full bg-accent/10 p-2">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">3. Team Contact</h3>
                    <p className="text-sm text-muted-foreground">
                      Once approved, our team will reach out to you via email or phone to discuss the next steps and answer any questions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Info Box */}
          <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 mb-8">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Please Note:</strong> If you don't receive a confirmation email within the next hour, please check your spam folder or contact us at support@baessolutions.com
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={() => navigate('/')}
              variant="default"
              size="lg"
            >
              Return to Homepage
            </Button>
            <Button
              onClick={() => window.location.href = 'mailto:support@baessolutions.com'}
              variant="outline"
              size="lg"
            >
              Contact Support
            </Button>
          </div>

          {/* Footer Text */}
          <div className="mt-8 text-center">
            <p className="text-xs text-muted-foreground">
              Registration ID will be sent to your email for reference.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

