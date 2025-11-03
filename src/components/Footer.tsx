const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dr. Hon. Antony Manyara, HSC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
