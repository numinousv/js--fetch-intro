# 🤖 JavaScript i praktiken - Introduktion till fetch

## 🚀 Vad är Fetch API?

Fetch API är ett modernt JavaScript-verktyg som låter dig hämta data från externa källor (som webbtjänster och API:er) direkt från din webbläsare. I denna uppgift kommer du att använda Fetch API för att hämta data från en extern server.

### Hur fungerar det?

1. **Skicka en förfrågan**: Du använder `fetch()` för att skicka en HTTP-förfrågan till en server
2. **Vänta på svar**: Servern bearbetar din förfrågan och skickar tillbaka data
3. **Hantera svaret**: Du får data som du kan använda i din applikation

### Varför är det användbart?

- **Realtidsdata**: Hämta aktuell information från externa källor
- **Interaktivitet**: Skapa dynamiska webbapplikationer som reagerar på användarinput
- **Integration**: Anslut din app till externa tjänster och databaser

## 👩‍💻 Steg

1. Välj ut ett API
2. Skriv logiken för att hämta data från det API:et med hjälp av `fetch()`
3. Använd user input från exempelvis ett formulär för att filtrera din API request
4. Visa upp responsen på ett användarvänligt sätt i UI:t. Exempelvis genom att generera eller skriva om innehållet på ett HTML-element.

   - Det redan existerande UI:t i den här uppgiften är bara ett exempel och bör ändras så mycket som nödvändigt för att passa det valda API:et och dess use cases.

Uppgiften är löst när datan från API:et hämtas och visas upp i gränssnittet

### 🧑‍🍳 Exempel på API:er

- [agify.io](https://agify.io/documentation)
  - Uppskattar en persons ålder baserat på deras namn genom att analysera namndata från olika länder
- [chucknorris.io](https://api.chucknorris.io/)
  - Levererar slumpmässiga Chuck Norris-skämt i olika kategorier
- [Dog API](https://dog.ceo/dog-api/)
  - Tillhandahåller slumpmässiga hundbilder av olika raser, perfekt för applikationer som behöver hundbilder

## 💡 Tips

- Tänk på att de flesta API:er har gränser för hur många requests man får göra om dagen. Det kan vara klokt att bara göra API-anropen när ett formulär submittas, istället för t.ex. vid varje ändring i text input.
