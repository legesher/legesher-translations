# German translation review history

> Preserved from [PR #183](https://github.com/legesher/legesher-translations/pull/183) — _Add Official Translation: German (Python)_
> PR opened **2020-12-30** by [@madiedgar](https://github.com/madiedgar)
> Merged **archived as part of [CORE-673](https://linear.app/legesher/issue/CORE-673)**

This document captures the community's line-by-line translation review discussion for the German keyword pack. Every word choice below was debated by multiple native-German-speaking contributors. The archived repo preserves the original PR pages; this doc extracts the decision-making record so future translators working on the monorepo's [`libs/i18n/language-packs/python/de/`](https://github.com/legesher/legesher/tree/main/libs/i18n/language-packs/python/de) pack can see the reasoning behind each choice.

## Reviewers

- [@alxnull](https://github.com/alxnull)

Additional review work appears inline in the PR description below, where anonymous contributors used ✅/❓/🤔 markers to vote on individual word translations.

---

## Original PR description

_Posted by [@madiedgar](https://github.com/madiedgar) on 2020-12-30_

# Adding official translation for Python in German

> Note: this is the first time we are adding an official language (which is super exciting). 🎉 So this process is open for feedback.

## 🔑 Keys to Python Keywords
We will start with just the Python keywords and look into the built-in functions after. Some things to keep in mind when selecting the official translation.

1. It's not too late to introduce a new translation that might better fit
2. The translation is to the functionality of the keyword and not necessarily to the English word itself. If there's a better way to describe what that keyword does in Python, but isn't a direct translation from the English word, this is the opportunity to embrace the beauty of your language! 
3. Please look over the translation comments in the locale file from the reviewers, as there are many insightful comments that you have all shared.

## 📖 Python Keyword Guidelines
Once a keyword translation is agreed upon, the format of that translation is then up for a decision. Here are the following formats that a keyword could be in:

1. Keywords have to be _one word_ without spaces in between:
  - The full keyword translation could be used, like `global` or `import`
  - A shortened version of the keyword can be used like `async` for _asynchronous_
  - A combination of words could be put together like `classmethod` or `isinstance`
  - A creative combination of translated words like `elif` for _else if_
2. Keywords have to be all lowercase.

## 👀 Keyword Review
This will be a team effort! You should all have been asked to be part of the `German Translator` Team from the Legesher organization. This allows all of the previous reviewers to be requested for a review and for future input in translations. Please use this PR to point out and discuss. 

**Keyword translations that have received all ✅ reviews.**
  ``` yaml
  False: "Falsch"
  None: "Nichts"
  True: "Wahr"
  and: "und"
  as: "als" 
  async: "asynchron"
  else: "sonst"
  except: "außer"
  global: "global"
  in: "in"
  is: "ist"
  not: "nicht"
  or: "oder"
  try: "versuche"
  pass: "weiter"
```

**Keywords that have received mostly ✅ but need confirmation.**
 ``` yaml
  await: "erwarte" | "warte auf"
  if: "falls" | "wenn"
  import: "importiere" | "verwende"
  del: "lösche"
  def: "def" | "definiere"
  lambda: "lambda" 
  for: "für"
  while: "während" | "solange"
  with: "mit" 
```

**Keywords that need to be discussed**
``` yaml
  assert: "behaupte" | "fordere" | "bestätige" | "versichere"
  break: "brich" | "bruch" | "Abbruch" | "brich ab"
  class: "klasse" | "Klasse"
  continue: "fortfahren" | "überspringe"
  elif: "sonstfalls" | "sonstwenn" | "ansonsten" | "andernfalls"
  finally: "endlich" | "schlußendlich" | "abschließend" 
  from: "von" | "aus" 
  nonlocal: "unlogisch" | "nichtlokal" | "nonlokal"
  raise: "erhebe" | "auslösen" | "löse aus" | "werfe"
  return: "gib" | "gib zurück"
  yield: "liefere" | "gib ab"
```

---

## Conversation thread

### @madiedgar — 2021-01-04

We will later look into built in functions and add official translation for those. Any input on how to make this process better would be greatly appreciated.

```yaml 
# << Built-In Functions >>

  abs: "abs" #✅ # absoluter wert? #absolut? #✅✅✅
  all: "alle" #✅✅✅✅✅✅
  any: "eines" #✅ #? beliebig ✅✅ # I second "beliebig"✅✅
  ascii: "ascii" #✅✅✅✅✅✅
  bin: "bin" # binär? ✅✅ #I second "binär"✅✅
  bool: "bool" # ✅ # warheitswert? ✅✅✅✅
  breakpoint: "bruchpunkt" # ✅✅✅✅ # ? Bruchpunkt #Abbruchpunkt?✅
  bytearray: "bytearray" # ? byteabfolge #? Bytearray ✅✅✅✅ # ? bytefolge
  bytes: "bytes" # ✅✅ #? Bytes ✅✅✅✅
  callable: "rufbar" # ? aufrufbar✅✅✅ # I second "aufrufbar"✅
  chr: "chr" # zeichen? ✅✅ #❓"Buchstabe" oder "Zeichen" ✅
  classmethod: "klassenmethode" # ✅✅ #?Klassenmethode✅✅✅✅
  # compile: "compiliere"✅
  compile: "kompiliere" #✅✅✅ # German spelling✅✅
  complex: "komplex" # ✅✅✅✅✅✅
  delattr: "" # entfattr? ✅✅ #löscheAttribut? #❓"lösche Attribut"✅, shortened to "löeschattr" maybe
  dict: "dict" # wörterbuch? ✅✅ ❓The German equivalent for dictionary would probably be "assoziative Liste"✅, so maybe shortened to "assozListe"; "Wörterbuch" a literal translation # 🤔
  dir: "ver" # verzeichnis? #Verzeichnis? # I second "Verzeichnis"✅✅✅
  divmod: "divmod" # ✅ # no idea, division(en) == division(de) so... #modulo? #🤔 ❓ "Division mit Rest"?✅
  enumerate: "aufzählen" # zähle_auf? #✅✅✅❓ #🤔
  eval: "evaluiere" #✅✅✅✅✅ # ? verarbeite / berechne✅
  exec: "ausführen" # ✅✅✅✅(if spaces are possible, use "führe aus" or "rufe auf")✅✅
  filter: "filter" #✅✅✅✅ # ? filtriere ✅
  float: "gleitkomma" # Gleitkomma or Fließkomma is floating point #Fließkomma? #✅✅✅
  format: "format" # -> noun | formatiere -> imperativ #formatiere? # I second "formatiere"✅✅
  frozenset: "frozenset" #gefrorenes set? #works but weird #🤔🤔🤔
  getattr: "getattr" # holeattribute? #holeAttribute # I second "holeattr"✅✅
  globals: "globale" # ✅✅✅✅✅ (alternatively, "globalvar" for "globale Variable")
  hasattr: "hatattr" # ✅✅✅✅ #hatAttribut?
  hash: "hash" #✅✅✅ # ? schlüssel / streuwert #Streuwert? #🤔 "Streuwert" is the best/the most literal translation, but I think "hash" works just fine
  help: "hilfe" # ✅✅✅✅✅
  hex: "hex" # ✅✅✅✅✅ #❓"hexadezimalzahl"
  id: "id" #✅✅✅✅ # no idea, probably same
  input: "eingabe" # ✅✅ #? Eingabe ✅✅✅
  int: "int" #✅✅✅✅✅ ? ganzzahl
  isinstance: "istinstanz" #✅✅✅✅✅
  issubclass: "istsubklasse" #✅✅✅✅✅
  iter: "iter" # Iterator same in German ✅✅✅✅
  len: "länge" #✅✅ Länge? ✅✅✅
  list: "liste" #✅✅ Liste? ✅✅✅
  locals: "locale" #✅ works but weird #lokale ✅ or maybe lokaleVariable? #🤔
  map: "karte" #✅ no idea #no idea #🤔"Karte" doesn't fit, depending on the context it means menu, or ticket, or chart, ... no idea, maybe "Abbildung"
  max: "max" #✅✅✅✅✅
  memoryview: "speicheransicht" #✅✅ #? Speicheransicht ✅✅✅
  min: "min" #✅✅✅✅✅
  # next: "weiter"
  next: "nächstes" #✅✅ More literal translation ✅ #❓"nächstfolgend"
  object: "objekt" #✅✅✅✅ # ? Objekt
  oct: "oct" #✅ do idea #no idea #❓"oktalzahl # ? oktal
  open: "öffne" #✅✅✅✅✅
  ord: "ord" #✅✅✅ # no idea #🤔
  pow: "potenz" #✅✅✅✅✅
  print: "drucke" #✅✅✅✅✅ (if spaces are allowed, "gib aus")
  property: "eigenschaft" # ✅✅✅✅ #? Eigenschaft ✅
  # range: "reichweite"✅
  range: "bereich" # Better fitting in context #✅✅✅✅ # ? Bereich
  repr: "repr" #✅✅✅✅✅ #🤔
  reversed: "umgekehrt" #✅✅✅✅✅✅
  round: "runde" #✅✅✅✅❓✅
  set: "setze" #✅✅✅✅✅✅
  setattr: "setzeattr" #✅✅✅✅✅✅
  # slice: "scheibe"
  slice: "schnitt" #✅✅ slice in this case is not necessarily a round plate, which "scheibe" implies ❓"Scheibe" fits (eine Scheibe Brot = a slice of bread) or "Stück" maybe❓
  sorted: "sortiert" #✅✅✅✅✅✅
  staticmethod: "statischemethode" #✅✅✅✅✅ #should be✅ "statischeMethode", because its two words and therefore camelcase is easier to read ✅
  str: "str" # ✅ # ? text #✅✅✅✅✅
  sum: "sum" # ? summe #✅✅✅✅✅✅
  super: "super" #✅✅ # über? # I second "über"✅✅
  tuple: "tuple" # no idea #❓"Tupel" #Tupel?✅✅✅
  type: "typ" # ✅✅✅✅ #?Typ ✅
  vars: "vars" # variablen? # I second "variablen" #Variablen?✅✅✅
  zip: "zip" #✅✅ # no idea✅ #🤔 #🤔
  __import__: "__importiere__" #✅✅✅✅✅ # ? __verwende__
```

---

## Formal reviews

### @alxnull — 2021-02-21 (COMMENTED)

Hey, although I was the last translator for the German translation (and have seen all suggestions already), I thought I might start some discussions on this. I added my comments and thoughts to the keyword translation that still need further discussion, for all other keywords, I agree with the translations that was mostly agreed upon.

---

## Line-by-line review comments

_Below: every inline comment on `locale/de.yaml` during the review. Quoted verbatim with reviewer attribution and line number from the original file._

#### [@alxnull](https://github.com/alxnull) — `locale/de.yaml:1275` (2021-02-21)

[Original comment](https://github.com/legesher/legesher-translations/pull/183#discussion_r579841509)

> I think "versichere" fits best since with `assert`, we want to _make sure_ that a certain condition is fulfilled. Only "versichere" has this meaning.

#### [@alxnull](https://github.com/alxnull) — `locale/de.yaml:1279` (2021-02-21)

[Original comment](https://github.com/legesher/legesher-translations/pull/183#discussion_r579841594)

> Agree with the given reasoning against "brich". "brich ab" (or "brichab" if without space) fits best.

#### [@alxnull](https://github.com/alxnull) — `locale/de.yaml:1280` (2021-02-21)

[Original comment](https://github.com/legesher/legesher-translations/pull/183#discussion_r579841774)

> Although keywords are generally lowercase, I think the capital "K" is important here, since "klasse" can mean something different (~ "great").

#### [@alxnull](https://github.com/alxnull) — `locale/de.yaml:1281` (2021-02-21)

[Original comment](https://github.com/legesher/legesher-translations/pull/183#discussion_r579841941)

> To match with "break" ("brichab") better, "fahre fort"/ "fahrefort" might also work

#### [@alxnull](https://github.com/alxnull) — `locale/de.yaml:1285` (2021-02-21)

[Original comment](https://github.com/legesher/legesher-translations/pull/183#discussion_r579842186)

> "sonstfalls" is most literal and most fitting (although I still think it sounds weird because that word actually doesn't exist)

#### [@alxnull](https://github.com/alxnull) — `locale/de.yaml:1288` (2021-02-21)

[Original comment](https://github.com/legesher/legesher-translations/pull/183#discussion_r579842386)

> "schlußendlich" or (better) "schlussendlich"

#### [@alxnull](https://github.com/alxnull) — `locale/de.yaml:1290` (2021-02-21)

[Original comment](https://github.com/legesher/legesher-translations/pull/183#discussion_r579842488)

> I second "aus" as the usage would be
> `aus ... importiere ...` 
> which imho sounds better than
> `von ... importiere ...`

#### [@alxnull](https://github.com/alxnull) — `locale/de.yaml:1298` (2021-02-21)

[Original comment](https://github.com/legesher/legesher-translations/pull/183#discussion_r579842686)

> "nichtlokal" or "nonlokal" are both ok imo

#### [@alxnull](https://github.com/alxnull) — `locale/de.yaml:1303` (2021-02-21)

[Original comment](https://github.com/legesher/legesher-translations/pull/183#discussion_r579843330)

> I think this is difficult because also `löse aus Ausnahme` sounds wrong (it would be `löse Ausnahme aus` which wouldn't work either because the keyword would surround the exception name).
> I think "werfe" would be best, although that means "throw" and is the keyword e.g. for Java/C# and not for Python.

#### [@alxnull](https://github.com/alxnull) — `locale/de.yaml:1305` (2021-02-21)

[Original comment](https://github.com/legesher/legesher-translations/pull/183#discussion_r579843404)

> "gib" is better as it's shorter
