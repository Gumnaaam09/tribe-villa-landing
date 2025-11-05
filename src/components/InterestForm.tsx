const InterestForm = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Express Your Interest
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below to let us know you&apos;re interested in joining the first tribe
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 sm:p-10 shadow-[var(--shadow-soft)] border border-border">
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-foreground mb-2">Questions included in the form:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Are you okay with the rent? (Yes/No)</li>
                  <li>• Food preference: Veg / Non-Veg</li>
                  <li>• Will you be able to move in by 1st Dec? (Yes/No)</li>
                  <li>• If not, how soon can you move?</li>
                </ul>
              </div>
            </div>

            <div className="bg-muted/50 rounded-xl p-8 text-center border-2 border-dashed border-border">
              <p className="text-muted-foreground mb-4">
                Google Form will be embedded here
              </p>
              <a 
                href="#" 
                className="text-primary hover:text-primary/80 font-semibold underline underline-offset-4 transition-colors"
              >
                [Add Google Form Embed Code]
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterestForm;
