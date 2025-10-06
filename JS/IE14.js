function tarkastaKokonaisluvut(a, b) {
       try {
        const lukuA = parseInt(a);
        const lukuB = parseInt(b);
       if (isNaN(lukuA) || isNaN(lukuB)) {
        throw new Error("Et antanut kokonaislukuja");
       }
       if (lukuA === lukuB) {
        return "Antamasi luvut ovat samat.";
       }
       else {
        return "Antamasi luvuet eivät ole samat.";
       }
    } catch (error) {
    return error.message;  
    }
}