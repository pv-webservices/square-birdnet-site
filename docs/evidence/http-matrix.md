# Production HTTP matrix

Full headers, cache signals, response hashes and request IDs are in crawlability-production.json. Canonical metadata is checked on GET HTML responses; HEAD does not contain HTML. Tests use browser and spoofed Googlebot user agents.

| URL | Method / UA | Original | Complete chain | Hops | Final | Canonical / validation | Result |
| --- | --- | --- | --- | --- | --- | --- | --- |
| https://squarebirdnet.com/about | GET / browser | 200 | 200 https://squarebirdnet.com/about | 0 | 200 | https://squarebirdnet.com/about | PASS |
| https://squarebirdnet.com/about | GET / googlebot | 200 | 200 https://squarebirdnet.com/about | 0 | 200 | https://squarebirdnet.com/about | PASS |
| https://squarebirdnet.com/contact | GET / browser | 200 | 200 https://squarebirdnet.com/contact | 0 | 200 | https://squarebirdnet.com/contact | PASS |
| https://squarebirdnet.com/contact | GET / googlebot | 200 | 200 https://squarebirdnet.com/contact | 0 | 200 | https://squarebirdnet.com/contact | PASS |
| https://squarebirdnet.com/faq | GET / browser | 200 | 200 https://squarebirdnet.com/faq | 0 | 200 | https://squarebirdnet.com/faq | PASS |
| https://squarebirdnet.com/faq | GET / googlebot | 200 | 200 https://squarebirdnet.com/faq | 0 | 200 | https://squarebirdnet.com/faq | PASS |
| https://squarebirdnet.com/ | GET / browser | 200 | 200 https://squarebirdnet.com/ | 0 | 200 | https://squarebirdnet.com | PASS |
| https://squarebirdnet.com/ | GET / googlebot | 200 | 200 https://squarebirdnet.com/ | 0 | 200 | https://squarebirdnet.com | PASS |
| https://squarebirdnet.com/projects | GET / browser | 200 | 200 https://squarebirdnet.com/projects | 0 | 200 | https://squarebirdnet.com/projects | PASS |
| https://squarebirdnet.com/projects | GET / googlebot | 200 | 200 https://squarebirdnet.com/projects | 0 | 200 | https://squarebirdnet.com/projects | PASS |
| https://squarebirdnet.com/services/bird-netting | GET / browser | 200 | 200 https://squarebirdnet.com/services/bird-netting | 0 | 200 | https://squarebirdnet.com/services/bird-netting | PASS |
| https://squarebirdnet.com/services/bird-netting | GET / googlebot | 200 | 200 https://squarebirdnet.com/services/bird-netting | 0 | 200 | https://squarebirdnet.com/services/bird-netting | PASS |
| https://squarebirdnet.com/services/bird-spikes | GET / browser | 200 | 200 https://squarebirdnet.com/services/bird-spikes | 0 | 200 | https://squarebirdnet.com/services/bird-spikes | PASS |
| https://squarebirdnet.com/services/bird-spikes | GET / googlebot | 200 | 200 https://squarebirdnet.com/services/bird-spikes | 0 | 200 | https://squarebirdnet.com/services/bird-spikes | PASS |
| https://squarebirdnet.com/services/cricket-net | GET / browser | 200 | 200 https://squarebirdnet.com/services/cricket-net | 0 | 200 | https://squarebirdnet.com/services/cricket-net | PASS |
| https://squarebirdnet.com/services/cricket-net | GET / googlebot | 200 | 200 https://squarebirdnet.com/services/cricket-net | 0 | 200 | https://squarebirdnet.com/services/cricket-net | PASS |
| https://squarebirdnet.com/services/invisible-grill | GET / browser | 200 | 200 https://squarebirdnet.com/services/invisible-grill | 0 | 200 | https://squarebirdnet.com/services/invisible-grill | PASS |
| https://squarebirdnet.com/services/invisible-grill | GET / googlebot | 200 | 200 https://squarebirdnet.com/services/invisible-grill | 0 | 200 | https://squarebirdnet.com/services/invisible-grill | PASS |
| https://squarebirdnet.com/services | GET / browser | 200 | 200 https://squarebirdnet.com/services | 0 | 200 | https://squarebirdnet.com/services | PASS |
| https://squarebirdnet.com/services | GET / googlebot | 200 | 200 https://squarebirdnet.com/services | 0 | 200 | https://squarebirdnet.com/services | PASS |
| https://squarebirdnet.com/videos | GET / browser | 200 | 200 https://squarebirdnet.com/videos | 0 | 200 | https://squarebirdnet.com/videos | PASS |
| https://squarebirdnet.com/videos | GET / googlebot | 200 | 200 https://squarebirdnet.com/videos | 0 | 200 | https://squarebirdnet.com/videos | PASS |
| https://squarebirdnet.com/robots.txt | GET / browser | 200 | 200 https://squarebirdnet.com/robots.txt | 0 | 200 | HTTP/header check | PASS |
| https://squarebirdnet.com/robots.txt | GET / googlebot | 200 | 200 https://squarebirdnet.com/robots.txt | 0 | 200 | HTTP/header check | PASS |
| https://squarebirdnet.com/sitemap.xml | GET / browser | 200 | 200 https://squarebirdnet.com/sitemap.xml | 0 | 200 | HTTP/header check | PASS |
| https://squarebirdnet.com/sitemap.xml | GET / googlebot | 200 | 200 https://squarebirdnet.com/sitemap.xml | 0 | 200 | HTTP/header check | PASS |
| http://squarebirdnet.com/about | GET / browser | 301 | 301 http://squarebirdnet.com/about → 200 https://squarebirdnet.com/about | 1 | 200 | https://squarebirdnet.com/about | PASS |
| http://squarebirdnet.com/about | GET / googlebot | 301 | 301 http://squarebirdnet.com/about → 200 https://squarebirdnet.com/about | 1 | 200 | https://squarebirdnet.com/about | PASS |
| http://squarebirdnet.com/contact | GET / browser | 301 | 301 http://squarebirdnet.com/contact → 200 https://squarebirdnet.com/contact | 1 | 200 | https://squarebirdnet.com/contact | PASS |
| http://squarebirdnet.com/contact | GET / googlebot | 301 | 301 http://squarebirdnet.com/contact → 200 https://squarebirdnet.com/contact | 1 | 200 | https://squarebirdnet.com/contact | PASS |
| http://squarebirdnet.com/faq | GET / browser | 301 | 301 http://squarebirdnet.com/faq → 200 https://squarebirdnet.com/faq | 1 | 200 | https://squarebirdnet.com/faq | PASS |
| http://squarebirdnet.com/faq | GET / googlebot | 301 | 301 http://squarebirdnet.com/faq → 200 https://squarebirdnet.com/faq | 1 | 200 | https://squarebirdnet.com/faq | PASS |
| http://squarebirdnet.com/ | GET / browser | 301 | 301 http://squarebirdnet.com/ → 200 https://squarebirdnet.com/ | 1 | 200 | https://squarebirdnet.com | PASS |
| http://squarebirdnet.com/ | GET / googlebot | 301 | 301 http://squarebirdnet.com/ → 200 https://squarebirdnet.com/ | 1 | 200 | https://squarebirdnet.com | PASS |
| http://squarebirdnet.com/projects | GET / browser | 301 | 301 http://squarebirdnet.com/projects → 200 https://squarebirdnet.com/projects | 1 | 200 | https://squarebirdnet.com/projects | PASS |
| http://squarebirdnet.com/projects | GET / googlebot | 301 | 301 http://squarebirdnet.com/projects → 200 https://squarebirdnet.com/projects | 1 | 200 | https://squarebirdnet.com/projects | PASS |
| http://squarebirdnet.com/services/bird-netting | GET / browser | 301 | 301 http://squarebirdnet.com/services/bird-netting → 200 https://squarebirdnet.com/services/bird-netting | 1 | 200 | https://squarebirdnet.com/services/bird-netting | PASS |
| http://squarebirdnet.com/services/bird-netting | GET / googlebot | 301 | 301 http://squarebirdnet.com/services/bird-netting → 200 https://squarebirdnet.com/services/bird-netting | 1 | 200 | https://squarebirdnet.com/services/bird-netting | PASS |
| http://squarebirdnet.com/services/bird-spikes | GET / browser | 301 | 301 http://squarebirdnet.com/services/bird-spikes → 200 https://squarebirdnet.com/services/bird-spikes | 1 | 200 | https://squarebirdnet.com/services/bird-spikes | PASS |
| http://squarebirdnet.com/services/bird-spikes | GET / googlebot | 301 | 301 http://squarebirdnet.com/services/bird-spikes → 200 https://squarebirdnet.com/services/bird-spikes | 1 | 200 | https://squarebirdnet.com/services/bird-spikes | PASS |
| http://squarebirdnet.com/services/cricket-net | GET / browser | 301 | 301 http://squarebirdnet.com/services/cricket-net → 200 https://squarebirdnet.com/services/cricket-net | 1 | 200 | https://squarebirdnet.com/services/cricket-net | PASS |
| http://squarebirdnet.com/services/cricket-net | GET / googlebot | 301 | 301 http://squarebirdnet.com/services/cricket-net → 200 https://squarebirdnet.com/services/cricket-net | 1 | 200 | https://squarebirdnet.com/services/cricket-net | PASS |
| http://squarebirdnet.com/services/invisible-grill | GET / browser | 301 | 301 http://squarebirdnet.com/services/invisible-grill → 200 https://squarebirdnet.com/services/invisible-grill | 1 | 200 | https://squarebirdnet.com/services/invisible-grill | PASS |
| http://squarebirdnet.com/services/invisible-grill | GET / googlebot | 301 | 301 http://squarebirdnet.com/services/invisible-grill → 200 https://squarebirdnet.com/services/invisible-grill | 1 | 200 | https://squarebirdnet.com/services/invisible-grill | PASS |
| http://squarebirdnet.com/services | GET / browser | 301 | 301 http://squarebirdnet.com/services → 200 https://squarebirdnet.com/services | 1 | 200 | https://squarebirdnet.com/services | PASS |
| http://squarebirdnet.com/services | GET / googlebot | 301 | 301 http://squarebirdnet.com/services → 200 https://squarebirdnet.com/services | 1 | 200 | https://squarebirdnet.com/services | PASS |
| http://squarebirdnet.com/videos | GET / browser | 301 | 301 http://squarebirdnet.com/videos → 200 https://squarebirdnet.com/videos | 1 | 200 | https://squarebirdnet.com/videos | PASS |
| http://squarebirdnet.com/videos | GET / googlebot | 301 | 301 http://squarebirdnet.com/videos → 200 https://squarebirdnet.com/videos | 1 | 200 | https://squarebirdnet.com/videos | PASS |
| http://squarebirdnet.com/robots.txt | GET / browser | 301 | 301 http://squarebirdnet.com/robots.txt → 200 https://squarebirdnet.com/robots.txt | 1 | 200 | HTTP/header check | PASS |
| http://squarebirdnet.com/robots.txt | GET / googlebot | 301 | 301 http://squarebirdnet.com/robots.txt → 200 https://squarebirdnet.com/robots.txt | 1 | 200 | HTTP/header check | PASS |
| http://squarebirdnet.com/sitemap.xml | GET / browser | 301 | 301 http://squarebirdnet.com/sitemap.xml → 200 https://squarebirdnet.com/sitemap.xml | 1 | 200 | HTTP/header check | PASS |
| http://squarebirdnet.com/sitemap.xml | GET / googlebot | 301 | 301 http://squarebirdnet.com/sitemap.xml → 200 https://squarebirdnet.com/sitemap.xml | 1 | 200 | HTTP/header check | PASS |
| http://www.squarebirdnet.com/about | GET / browser | 301 | 301 http://www.squarebirdnet.com/about → 301 https://www.squarebirdnet.com/about → 200 https://squarebirdnet.com/about | 2 | 200 | https://squarebirdnet.com/about | PASS |
| http://www.squarebirdnet.com/about | GET / googlebot | 301 | 301 http://www.squarebirdnet.com/about → 301 https://www.squarebirdnet.com/about → 200 https://squarebirdnet.com/about | 2 | 200 | https://squarebirdnet.com/about | PASS |
| http://www.squarebirdnet.com/contact | GET / browser | 301 | 301 http://www.squarebirdnet.com/contact → 301 https://www.squarebirdnet.com/contact → 200 https://squarebirdnet.com/contact | 2 | 200 | https://squarebirdnet.com/contact | PASS |
| http://www.squarebirdnet.com/contact | GET / googlebot | 301 | 301 http://www.squarebirdnet.com/contact → 301 https://www.squarebirdnet.com/contact → 200 https://squarebirdnet.com/contact | 2 | 200 | https://squarebirdnet.com/contact | PASS |
| http://www.squarebirdnet.com/faq | GET / browser | 301 | 301 http://www.squarebirdnet.com/faq → 301 https://www.squarebirdnet.com/faq → 200 https://squarebirdnet.com/faq | 2 | 200 | https://squarebirdnet.com/faq | PASS |
| http://www.squarebirdnet.com/faq | GET / googlebot | 301 | 301 http://www.squarebirdnet.com/faq → 301 https://www.squarebirdnet.com/faq → 200 https://squarebirdnet.com/faq | 2 | 200 | https://squarebirdnet.com/faq | PASS |
| http://www.squarebirdnet.com/ | GET / browser | 301 | 301 http://www.squarebirdnet.com/ → 301 https://www.squarebirdnet.com/ → 200 https://squarebirdnet.com/ | 2 | 200 | https://squarebirdnet.com | PASS |
| http://www.squarebirdnet.com/ | GET / googlebot | 301 | 301 http://www.squarebirdnet.com/ → 301 https://www.squarebirdnet.com/ → 200 https://squarebirdnet.com/ | 2 | 200 | https://squarebirdnet.com | PASS |
| http://www.squarebirdnet.com/projects | GET / browser | 301 | 301 http://www.squarebirdnet.com/projects → 301 https://www.squarebirdnet.com/projects → 200 https://squarebirdnet.com/projects | 2 | 200 | https://squarebirdnet.com/projects | PASS |
| http://www.squarebirdnet.com/projects | GET / googlebot | 301 | 301 http://www.squarebirdnet.com/projects → 301 https://www.squarebirdnet.com/projects → 200 https://squarebirdnet.com/projects | 2 | 200 | https://squarebirdnet.com/projects | PASS |
| http://www.squarebirdnet.com/services/bird-netting | GET / browser | 301 | 301 http://www.squarebirdnet.com/services/bird-netting → 301 https://www.squarebirdnet.com/services/bird-netting → 200 https://squarebirdnet.com/services/bird-netting | 2 | 200 | https://squarebirdnet.com/services/bird-netting | PASS |
| http://www.squarebirdnet.com/services/bird-netting | GET / googlebot | 301 | 301 http://www.squarebirdnet.com/services/bird-netting → 301 https://www.squarebirdnet.com/services/bird-netting → 200 https://squarebirdnet.com/services/bird-netting | 2 | 200 | https://squarebirdnet.com/services/bird-netting | PASS |
| http://www.squarebirdnet.com/services/bird-spikes | GET / browser | 301 | 301 http://www.squarebirdnet.com/services/bird-spikes → 301 https://www.squarebirdnet.com/services/bird-spikes → 200 https://squarebirdnet.com/services/bird-spikes | 2 | 200 | https://squarebirdnet.com/services/bird-spikes | PASS |
| http://www.squarebirdnet.com/services/bird-spikes | GET / googlebot | 301 | 301 http://www.squarebirdnet.com/services/bird-spikes → 301 https://www.squarebirdnet.com/services/bird-spikes → 200 https://squarebirdnet.com/services/bird-spikes | 2 | 200 | https://squarebirdnet.com/services/bird-spikes | PASS |
| http://www.squarebirdnet.com/services/cricket-net | GET / browser | 301 | 301 http://www.squarebirdnet.com/services/cricket-net → 301 https://www.squarebirdnet.com/services/cricket-net → 200 https://squarebirdnet.com/services/cricket-net | 2 | 200 | https://squarebirdnet.com/services/cricket-net | PASS |
| http://www.squarebirdnet.com/services/cricket-net | GET / googlebot | 301 | 301 http://www.squarebirdnet.com/services/cricket-net → 301 https://www.squarebirdnet.com/services/cricket-net → 200 https://squarebirdnet.com/services/cricket-net | 2 | 200 | https://squarebirdnet.com/services/cricket-net | PASS |
| http://www.squarebirdnet.com/services/invisible-grill | GET / browser | 301 | 301 http://www.squarebirdnet.com/services/invisible-grill → 301 https://www.squarebirdnet.com/services/invisible-grill → 200 https://squarebirdnet.com/services/invisible-grill | 2 | 200 | https://squarebirdnet.com/services/invisible-grill | PASS |
| http://www.squarebirdnet.com/services/invisible-grill | GET / googlebot | 301 | 301 http://www.squarebirdnet.com/services/invisible-grill → 301 https://www.squarebirdnet.com/services/invisible-grill → 200 https://squarebirdnet.com/services/invisible-grill | 2 | 200 | https://squarebirdnet.com/services/invisible-grill | PASS |
| http://www.squarebirdnet.com/services | GET / browser | 301 | 301 http://www.squarebirdnet.com/services → 301 https://www.squarebirdnet.com/services → 200 https://squarebirdnet.com/services | 2 | 200 | https://squarebirdnet.com/services | PASS |
| http://www.squarebirdnet.com/services | GET / googlebot | 301 | 301 http://www.squarebirdnet.com/services → 301 https://www.squarebirdnet.com/services → 200 https://squarebirdnet.com/services | 2 | 200 | https://squarebirdnet.com/services | PASS |
| http://www.squarebirdnet.com/videos | GET / browser | 301 | 301 http://www.squarebirdnet.com/videos → 301 https://www.squarebirdnet.com/videos → 200 https://squarebirdnet.com/videos | 2 | 200 | https://squarebirdnet.com/videos | PASS |
| http://www.squarebirdnet.com/videos | GET / googlebot | 301 | 301 http://www.squarebirdnet.com/videos → 301 https://www.squarebirdnet.com/videos → 200 https://squarebirdnet.com/videos | 2 | 200 | https://squarebirdnet.com/videos | PASS |
| http://www.squarebirdnet.com/robots.txt | GET / browser | 301 | 301 http://www.squarebirdnet.com/robots.txt → 301 https://www.squarebirdnet.com/robots.txt → 200 https://squarebirdnet.com/robots.txt | 2 | 200 | HTTP/header check | PASS |
| http://www.squarebirdnet.com/robots.txt | GET / googlebot | 301 | 301 http://www.squarebirdnet.com/robots.txt → 301 https://www.squarebirdnet.com/robots.txt → 200 https://squarebirdnet.com/robots.txt | 2 | 200 | HTTP/header check | PASS |
| http://www.squarebirdnet.com/sitemap.xml | GET / browser | 301 | 301 http://www.squarebirdnet.com/sitemap.xml → 301 https://www.squarebirdnet.com/sitemap.xml → 200 https://squarebirdnet.com/sitemap.xml | 2 | 200 | HTTP/header check | PASS |
| http://www.squarebirdnet.com/sitemap.xml | GET / googlebot | 301 | 301 http://www.squarebirdnet.com/sitemap.xml → 301 https://www.squarebirdnet.com/sitemap.xml → 200 https://squarebirdnet.com/sitemap.xml | 2 | 200 | HTTP/header check | PASS |
| https://www.squarebirdnet.com/about | GET / browser | 301 | 301 https://www.squarebirdnet.com/about → 200 https://squarebirdnet.com/about | 1 | 200 | https://squarebirdnet.com/about | PASS |
| https://www.squarebirdnet.com/about | GET / googlebot | 301 | 301 https://www.squarebirdnet.com/about → 200 https://squarebirdnet.com/about | 1 | 200 | https://squarebirdnet.com/about | PASS |
| https://www.squarebirdnet.com/contact | GET / browser | 301 | 301 https://www.squarebirdnet.com/contact → 200 https://squarebirdnet.com/contact | 1 | 200 | https://squarebirdnet.com/contact | PASS |
| https://www.squarebirdnet.com/contact | GET / googlebot | 301 | 301 https://www.squarebirdnet.com/contact → 200 https://squarebirdnet.com/contact | 1 | 200 | https://squarebirdnet.com/contact | PASS |
| https://www.squarebirdnet.com/faq | GET / browser | 301 | 301 https://www.squarebirdnet.com/faq → 200 https://squarebirdnet.com/faq | 1 | 200 | https://squarebirdnet.com/faq | PASS |
| https://www.squarebirdnet.com/faq | GET / googlebot | 301 | 301 https://www.squarebirdnet.com/faq → 200 https://squarebirdnet.com/faq | 1 | 200 | https://squarebirdnet.com/faq | PASS |
| https://www.squarebirdnet.com/ | GET / browser | 301 | 301 https://www.squarebirdnet.com/ → 200 https://squarebirdnet.com/ | 1 | 200 | https://squarebirdnet.com | PASS |
| https://www.squarebirdnet.com/ | GET / googlebot | 301 | 301 https://www.squarebirdnet.com/ → 200 https://squarebirdnet.com/ | 1 | 200 | https://squarebirdnet.com | PASS |
| https://www.squarebirdnet.com/projects | GET / browser | 301 | 301 https://www.squarebirdnet.com/projects → 200 https://squarebirdnet.com/projects | 1 | 200 | https://squarebirdnet.com/projects | PASS |
| https://www.squarebirdnet.com/projects | GET / googlebot | 301 | 301 https://www.squarebirdnet.com/projects → 200 https://squarebirdnet.com/projects | 1 | 200 | https://squarebirdnet.com/projects | PASS |
| https://www.squarebirdnet.com/services/bird-netting | GET / browser | 301 | 301 https://www.squarebirdnet.com/services/bird-netting → 200 https://squarebirdnet.com/services/bird-netting | 1 | 200 | https://squarebirdnet.com/services/bird-netting | PASS |
| https://www.squarebirdnet.com/services/bird-netting | GET / googlebot | 301 | 301 https://www.squarebirdnet.com/services/bird-netting → 200 https://squarebirdnet.com/services/bird-netting | 1 | 200 | https://squarebirdnet.com/services/bird-netting | PASS |
| https://www.squarebirdnet.com/services/bird-spikes | GET / browser | 301 | 301 https://www.squarebirdnet.com/services/bird-spikes → 200 https://squarebirdnet.com/services/bird-spikes | 1 | 200 | https://squarebirdnet.com/services/bird-spikes | PASS |
| https://www.squarebirdnet.com/services/bird-spikes | GET / googlebot | 301 | 301 https://www.squarebirdnet.com/services/bird-spikes → 200 https://squarebirdnet.com/services/bird-spikes | 1 | 200 | https://squarebirdnet.com/services/bird-spikes | PASS |
| https://www.squarebirdnet.com/services/cricket-net | GET / browser | 301 | 301 https://www.squarebirdnet.com/services/cricket-net → 200 https://squarebirdnet.com/services/cricket-net | 1 | 200 | https://squarebirdnet.com/services/cricket-net | PASS |
| https://www.squarebirdnet.com/services/cricket-net | GET / googlebot | 301 | 301 https://www.squarebirdnet.com/services/cricket-net → 200 https://squarebirdnet.com/services/cricket-net | 1 | 200 | https://squarebirdnet.com/services/cricket-net | PASS |
| https://www.squarebirdnet.com/services/invisible-grill | GET / browser | 301 | 301 https://www.squarebirdnet.com/services/invisible-grill → 200 https://squarebirdnet.com/services/invisible-grill | 1 | 200 | https://squarebirdnet.com/services/invisible-grill | PASS |
| https://www.squarebirdnet.com/services/invisible-grill | GET / googlebot | 301 | 301 https://www.squarebirdnet.com/services/invisible-grill → 200 https://squarebirdnet.com/services/invisible-grill | 1 | 200 | https://squarebirdnet.com/services/invisible-grill | PASS |
| https://www.squarebirdnet.com/services | GET / browser | 301 | 301 https://www.squarebirdnet.com/services → 200 https://squarebirdnet.com/services | 1 | 200 | https://squarebirdnet.com/services | PASS |
| https://www.squarebirdnet.com/services | GET / googlebot | 301 | 301 https://www.squarebirdnet.com/services → 200 https://squarebirdnet.com/services | 1 | 200 | https://squarebirdnet.com/services | PASS |
| https://www.squarebirdnet.com/videos | GET / browser | 301 | 301 https://www.squarebirdnet.com/videos → 200 https://squarebirdnet.com/videos | 1 | 200 | https://squarebirdnet.com/videos | PASS |
| https://www.squarebirdnet.com/videos | GET / googlebot | 301 | 301 https://www.squarebirdnet.com/videos → 200 https://squarebirdnet.com/videos | 1 | 200 | https://squarebirdnet.com/videos | PASS |
| https://www.squarebirdnet.com/robots.txt | GET / browser | 301 | 301 https://www.squarebirdnet.com/robots.txt → 200 https://squarebirdnet.com/robots.txt | 1 | 200 | HTTP/header check | PASS |
| https://www.squarebirdnet.com/robots.txt | GET / googlebot | 301 | 301 https://www.squarebirdnet.com/robots.txt → 200 https://squarebirdnet.com/robots.txt | 1 | 200 | HTTP/header check | PASS |
| https://www.squarebirdnet.com/sitemap.xml | GET / browser | 301 | 301 https://www.squarebirdnet.com/sitemap.xml → 200 https://squarebirdnet.com/sitemap.xml | 1 | 200 | HTTP/header check | PASS |
| https://www.squarebirdnet.com/sitemap.xml | GET / googlebot | 301 | 301 https://www.squarebirdnet.com/sitemap.xml → 200 https://squarebirdnet.com/sitemap.xml | 1 | 200 | HTTP/header check | PASS |
| https://squarebirdnet.com/privacy-policy | GET / browser | 200 | 200 https://squarebirdnet.com/privacy-policy | 0 | 200 | noindex; no canonical | PASS |
| https://squarebirdnet.com/privacy-policy | GET / googlebot | 200 | 200 https://squarebirdnet.com/privacy-policy | 0 | 200 | noindex; no canonical | PASS |
| https://squarebirdnet.com/terms | GET / browser | 200 | 200 https://squarebirdnet.com/terms | 0 | 200 | noindex; no canonical | PASS |
| https://squarebirdnet.com/terms | GET / googlebot | 200 | 200 https://squarebirdnet.com/terms | 0 | 200 | noindex; no canonical | PASS |
| https://squarebirdnet.com/this-page-should-not-exist-404-check | GET / browser | 404 | 404 https://squarebirdnet.com/this-page-should-not-exist-404-check | 0 | 404 | noindex; no canonical | PASS |
| https://squarebirdnet.com/this-page-should-not-exist-404-check | GET / googlebot | 404 | 404 https://squarebirdnet.com/this-page-should-not-exist-404-check | 0 | 404 | noindex; no canonical | PASS |
| https://squarebirdnet.com/ | HEAD / browser | 200 | 200 https://squarebirdnet.com/ | 0 | 200 | HTTP/header check | PASS |
| https://squarebirdnet.com/ | HEAD / googlebot | 200 | 200 https://squarebirdnet.com/ | 0 | 200 | HTTP/header check | PASS |
| https://squarebirdnet.com/about | HEAD / browser | 200 | 200 https://squarebirdnet.com/about | 0 | 200 | HTTP/header check | PASS |
| https://squarebirdnet.com/about | HEAD / googlebot | 200 | 200 https://squarebirdnet.com/about | 0 | 200 | HTTP/header check | PASS |
| https://squarebirdnet.com/robots.txt | HEAD / browser | 200 | 200 https://squarebirdnet.com/robots.txt | 0 | 200 | HTTP/header check | PASS |
| https://squarebirdnet.com/robots.txt | HEAD / googlebot | 200 | 200 https://squarebirdnet.com/robots.txt | 0 | 200 | HTTP/header check | PASS |
| https://squarebirdnet.com/sitemap.xml | HEAD / browser | 200 | 200 https://squarebirdnet.com/sitemap.xml | 0 | 200 | HTTP/header check | PASS |
| https://squarebirdnet.com/sitemap.xml | HEAD / googlebot | 200 | 200 https://squarebirdnet.com/sitemap.xml | 0 | 200 | HTTP/header check | PASS |
| http://squarebirdnet.com/ | HEAD / browser | 301 | 301 http://squarebirdnet.com/ → 200 https://squarebirdnet.com/ | 1 | 200 | HTTP/header check | PASS |
| http://squarebirdnet.com/ | HEAD / googlebot | 301 | 301 http://squarebirdnet.com/ → 200 https://squarebirdnet.com/ | 1 | 200 | HTTP/header check | PASS |
| http://squarebirdnet.com/about | HEAD / browser | 301 | 301 http://squarebirdnet.com/about → 200 https://squarebirdnet.com/about | 1 | 200 | HTTP/header check | PASS |
| http://squarebirdnet.com/about | HEAD / googlebot | 301 | 301 http://squarebirdnet.com/about → 200 https://squarebirdnet.com/about | 1 | 200 | HTTP/header check | PASS |
| http://squarebirdnet.com/robots.txt | HEAD / browser | 301 | 301 http://squarebirdnet.com/robots.txt → 200 https://squarebirdnet.com/robots.txt | 1 | 200 | HTTP/header check | PASS |
| http://squarebirdnet.com/robots.txt | HEAD / googlebot | 301 | 301 http://squarebirdnet.com/robots.txt → 200 https://squarebirdnet.com/robots.txt | 1 | 200 | HTTP/header check | PASS |
| http://squarebirdnet.com/sitemap.xml | HEAD / browser | 301 | 301 http://squarebirdnet.com/sitemap.xml → 200 https://squarebirdnet.com/sitemap.xml | 1 | 200 | HTTP/header check | PASS |
| http://squarebirdnet.com/sitemap.xml | HEAD / googlebot | 301 | 301 http://squarebirdnet.com/sitemap.xml → 200 https://squarebirdnet.com/sitemap.xml | 1 | 200 | HTTP/header check | PASS |
| http://www.squarebirdnet.com/ | HEAD / browser | 301 | 301 http://www.squarebirdnet.com/ → 301 https://www.squarebirdnet.com/ → 200 https://squarebirdnet.com/ | 2 | 200 | HTTP/header check | PASS |
| http://www.squarebirdnet.com/ | HEAD / googlebot | 301 | 301 http://www.squarebirdnet.com/ → 301 https://www.squarebirdnet.com/ → 200 https://squarebirdnet.com/ | 2 | 200 | HTTP/header check | PASS |
| http://www.squarebirdnet.com/about | HEAD / browser | 301 | 301 http://www.squarebirdnet.com/about → 301 https://www.squarebirdnet.com/about → 200 https://squarebirdnet.com/about | 2 | 200 | HTTP/header check | PASS |
| http://www.squarebirdnet.com/about | HEAD / googlebot | 301 | 301 http://www.squarebirdnet.com/about → 301 https://www.squarebirdnet.com/about → 200 https://squarebirdnet.com/about | 2 | 200 | HTTP/header check | PASS |
| http://www.squarebirdnet.com/robots.txt | HEAD / browser | 301 | 301 http://www.squarebirdnet.com/robots.txt → 301 https://www.squarebirdnet.com/robots.txt → 200 https://squarebirdnet.com/robots.txt | 2 | 200 | HTTP/header check | PASS |
| http://www.squarebirdnet.com/robots.txt | HEAD / googlebot | 301 | 301 http://www.squarebirdnet.com/robots.txt → 301 https://www.squarebirdnet.com/robots.txt → 200 https://squarebirdnet.com/robots.txt | 2 | 200 | HTTP/header check | PASS |
| http://www.squarebirdnet.com/sitemap.xml | HEAD / browser | 301 | 301 http://www.squarebirdnet.com/sitemap.xml → 301 https://www.squarebirdnet.com/sitemap.xml → 200 https://squarebirdnet.com/sitemap.xml | 2 | 200 | HTTP/header check | PASS |
| http://www.squarebirdnet.com/sitemap.xml | HEAD / googlebot | 301 | 301 http://www.squarebirdnet.com/sitemap.xml → 301 https://www.squarebirdnet.com/sitemap.xml → 200 https://squarebirdnet.com/sitemap.xml | 2 | 200 | HTTP/header check | PASS |
| https://www.squarebirdnet.com/ | HEAD / browser | 301 | 301 https://www.squarebirdnet.com/ → 200 https://squarebirdnet.com/ | 1 | 200 | HTTP/header check | PASS |
| https://www.squarebirdnet.com/ | HEAD / googlebot | 301 | 301 https://www.squarebirdnet.com/ → 200 https://squarebirdnet.com/ | 1 | 200 | HTTP/header check | PASS |
| https://www.squarebirdnet.com/about | HEAD / browser | 301 | 301 https://www.squarebirdnet.com/about → 200 https://squarebirdnet.com/about | 1 | 200 | HTTP/header check | PASS |
| https://www.squarebirdnet.com/about | HEAD / googlebot | 301 | 301 https://www.squarebirdnet.com/about → 200 https://squarebirdnet.com/about | 1 | 200 | HTTP/header check | PASS |
| https://www.squarebirdnet.com/robots.txt | HEAD / browser | 301 | 301 https://www.squarebirdnet.com/robots.txt → 200 https://squarebirdnet.com/robots.txt | 1 | 200 | HTTP/header check | PASS |
| https://www.squarebirdnet.com/robots.txt | HEAD / googlebot | 301 | 301 https://www.squarebirdnet.com/robots.txt → 200 https://squarebirdnet.com/robots.txt | 1 | 200 | HTTP/header check | PASS |
| https://www.squarebirdnet.com/sitemap.xml | HEAD / browser | 301 | 301 https://www.squarebirdnet.com/sitemap.xml → 200 https://squarebirdnet.com/sitemap.xml | 1 | 200 | HTTP/header check | PASS |
| https://www.squarebirdnet.com/sitemap.xml | HEAD / googlebot | 301 | 301 https://www.squarebirdnet.com/sitemap.xml → 200 https://squarebirdnet.com/sitemap.xml | 1 | 200 | HTTP/header check | PASS |
| https://square-birdnet-site.netlify.app/ | GET / browser | 200 | 200 https://square-birdnet-site.netlify.app/ | 0 | 200 | https://squarebirdnet.com | PASS |
| https://square-birdnet-site.netlify.app/about | GET / browser | 200 | 200 https://square-birdnet-site.netlify.app/about | 0 | 200 | https://squarebirdnet.com/about | PASS |
| https://square-birdnet-site.netlify.app/robots.txt | GET / browser | 200 | 200 https://square-birdnet-site.netlify.app/robots.txt | 0 | 200 | HTTP/header check | PASS |
| https://square-birdnet-site.netlify.app/sitemap.xml | GET / browser | 200 | 200 https://square-birdnet-site.netlify.app/sitemap.xml | 0 | 200 | HTTP/header check | PASS |
