# Spam Report discord
A project that automates reporting a specific message on Discord.

### Acknowledgement

Concept inspired by [NTTS (No Text To Speech)](https://www.youtube.com/@NoTextToSpeech) — see the original video: https://www.youtube.com/watch?v=86LnUk2Dk50

## Disclaimer

**THIS IS FOR EDUCATIONAL PURPOSES ONLY. USE IT AT YOUR OWN RISK.**
This selfbot script allows you to report a specific message on Discord repeatedly using predefined report reasons. Use it responsibly and ensure compliance with Discord's terms of service. Be aware that using selfbots is against Discord's terms of service and may lead to account suspension. And spam reporting messages can lead to penalties for the reported user, so use this script ethically and responsibly.

### Prerequisites
- Node.js installed on your machine.
- A Discord account (note that using selfbots is against Discord's terms of service).

### How to Use
1. Clone this repository to your local machine.
```bash
git clone https://github.com/thedtvn/spam-report-discord.git
```
2. Install the required dependencies using `npm install`.
3. Update the `config.json` file with your Discord account token, target message details, report delay (in milliseconds), and put you desired report reasons selected from [the mapping table below](#report-reasons-mapping).
4. Run the script using `node index.js`.

### Report Reasons Mapping

| Report Reason | Reason IDs |
|---|---|
| I don't like it | ["7", "96"] |
| Spam | ["7", "97"] |
| Verbally harassing me or someone else | ["7", "75", "100"] |
| Using rude, vulgar, or offensive language | ["7", "75", "101"] |
| Promoting hate based on identity or vulnerability | ["7", "75", "105"] |
| Explicit, graphic, or unwanted sexual content | ["7", "75", "85"] |
| A threat to physically hurt me or someone else | ["7", "75", "89", "115"] |
| Celebrating or glorifying acts of violence | ["7", "75", "89", "116"] |
| Illustration that sexualizes minors | ["7", "75", "87", "110"] |
| Talking about minors in a sexual way | ["7", "75", "87", "111"] |
| Sending suggestive or sexual messages to a minor | ["7", "75", "87", "112"] |
| A minor posting or sending sexual messages | ["7", "75", "87", "113"] |
| Photos or videos depicting child sexual abuse | ["7", "75", "87", "114"] |
| Saying bad things about me or someone I know | ["7", "93", "94", "100"] |
| Spreading fake news or harmful conspiracy theories | ["7", "93", "94", "129"] |
| Celebrating or glorifying acts of violence | ["7", "93", "116"] |
| Promoting hate based on identity or vulnerability | ["7", "93", "105"] |
| Stating age in message | ["7", "79", "90", "125"] |
| Saying bad things | ["7", "79", "93", "94", "100"] |
| Spreading fake news | ["7", "79", "93", "94", "129"] |
| Celebrating or glorifying acts of violence | ["7", "79", "93", "116"] |
| Promoting hate | ["7", "79", "93", "105"] |
| Impersonating an employee or support agent | ["7", "79", "119", "164"] |
| Impersonating me or someone I know | ["7", "79", "119", "161"] |
| Impersonating a celebrity or public figure | ["7", "79", "119", "162"] |
| Impersonating a business or organization | ["7", "79", "119", "163"] |
| Scamming or defrauding | ["7", "79", "119", "165"] |
| Distributing stolen accounts or credit cards | ["7", "79", "121"] |
| Selling drugs or other illegal goods | ["7", "79", "122"] |
| Hacks, cheats, phishing or malicious links | ["7", "79", "124"] |

### License

This repository is provided under the MIT license. See `LICENSE` file for details.