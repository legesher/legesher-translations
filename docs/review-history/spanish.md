# Spanish translation review history

> Preserved from [PR #186](https://github.com/legesher/legesher-translations/pull/186) — _Add Official Translation - Spanish (Python)_
> PR opened **2020-12-31** by [@madiedgar](https://github.com/madiedgar)
> Merged **archived as part of [CORE-673](https://linear.app/legesher/issue/CORE-673)**

This document captures the community's line-by-line translation review discussion for the Spanish keyword pack. Every word choice below was debated by multiple native-Spanish-speaking contributors. The archived repo preserves the original PR pages; this doc extracts the decision-making record so future translators working on the monorepo's [`libs/i18n/language-packs/python/es/`](https://github.com/legesher/legesher/tree/main/libs/i18n/language-packs/python/es) pack can see the reasoning behind each choice.

## Reviewers

- [@begeistert](https://github.com/begeistert)
- [@jaimegarjr](https://github.com/jaimegarjr)

Additional review work appears inline in the PR description below, where anonymous contributors used ✅/❓/🤔 markers to vote on individual word translations.

---

## Original PR description

_Posted by [@madiedgar](https://github.com/madiedgar) on 2020-12-31_

# Adding official translation for Python in Spanish

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
This will be a team effort! You should all have been asked to be part of the `Spanish Translator` Team from the Legesher organization. This allows all of the previous reviewers to be requested for a review and for future input in translations. Please use this PR to point out and discuss. 

**Keyword translations that have received all ✅ reviews.**
  ``` yaml
  False: "Falso" 
  None: "Ninguno"
  True: "Verdadero" 
  and: "Y" 
  as: "como"
  async: "asíncrono"
  await: "esperar" 
  class: "clase" 
  continue: "continuar"
  else: "si no" 
  except: "excepto"
  finally: "finalmente"
  for: "para" 
  from: "desde" 
  global:  "global"
  import: "importar"
  in: "en" 
  is: "es" 
  nonlocal: "no local"
  not: "no" 
  or: "o" 
  pass: "pasar"
  while: "mientras"
  with: "con" 
```

**Keywords that have received mostly ✅ but need confirmation.**
 ``` yaml
  assert: "afirmar" | "asegurar"
  break: "interrumpir" | "romper"
  if: "si" 
```

**Keywords that need to be discussed**
``` yaml
  def: "define" | "def"
  del: "eliminar" | "borrar"
  elif: "si no, si" | "no si"
  lambda: "función anónima" 
  raise: "genera excepción" | "generar" | "lanza" | "levanta"
  return: "regresa" | "retorna"
  try: "intenta" | "tratar"
  yield: "entregar" | "retornar" | "entregar" 
```

---

## Conversation thread

### @madiedgar — 2021-01-04

We will later look into built in functions and add official translation for those. Any input on how to make this process better would be greatly appreciated.

```yaml
# << Built-In Functions >>

  abs: "valor absoluto" # ✅✅✅✅✅✅
  all: "todos" # I think we can omite "iterable" ✅ I agree with "todos" ✅✅✅✅
  any: "alguno" # same here ✅ I agree with "alguno" ✅✅✅✅
  ascii: "ascii" # ✅✅ does not have direct translation ✅✅✅✅✅
  bin: "binario" # ✅✅✅✅✅✅
  bool: "booleano" # ✅✅✅✅✅✅✅
  breakpoint: "punto de interrupción" # ✅ Punto de interrupción sounds more natural for me ✅ I agree with the comment ✅✅✅✅
  bytearray: "arreglo de byte" # ✅✅✅✅✅🤔The word "byte" should be in plural as "bytes"🤔 I agree with the first comment
  bytes: "bytes" # ✅✅✅✅✅✅
  callable: "llamable" # ✅❓✅✅✅❓It's more appropiate the word "invocable", and the Python documentation accepts it instead of the one here.❓
  chr: "caracter" # ✅✅✅✅✅✅✅
  classmethod: "método de la clase" # ✅✅✅✅✅✅✅
  compile: "compilar" # ✅✅✅✅✅✅✅
  complex: "complejo" # ✅✅✅✅✅✅✅
  delattr: "eliminar atributo" # ✅✅ from delete attribute ✅✅✅✅✅
  dict: "diccionario" # ✅✅✅✅✅✅✅
  dir: "atributos" # ✅✅✅✅✅✅
  divmod: "cociente y resto" # ✅✅✅✅✅✅
  enumerate: "enumerar" # ✅✅✅✅✅✅
  eval: "evaluar" # ✅✅✅✅✅✅
  exec: "ejecutar" # ✅✅✅✅✅✅✅
  filter: "filtrar" # ✅✅✅✅✅✅✅
  float: "flotante"  # ✅✅✅✅✅✅✅
  format: "formato" # ✅✅✅✅✅✅✅
  frozenset: "congelar" # ✅✅✅✅✅✅It's needed to mention that the literal translation is "conjunto congelado"✅
  getattr: "obtener atributo" # ✅✅✅✅✅✅✅
  globals: "globales" # ✅✅✅✅✅✅✅
  hasattr: "tiene atributo" # ✅✅✅✅✅✅✅
  hash: "hash" # ✅✅ its direct translation wont make sense in this context ✅✅ I agree, keeping hash is fine✅✅✅
  help: "ayuda" # ✅✅✅✅✅✅✅
  hex: "hexadecimal" # ✅✅✅✅✅✅✅
  id: "identificador" # ✅✅✅✅ or just id is fine as well✅ id sounds okay✅ Like the comments before, "id" is also ok, but also "identidad"✅
  input: "entrada" # ✅✅✅✅✅✅✅
  int: "entero" # ✅✅✅✅✅✅✅
  isinstance: "es instancia" # ✅✅✅✅✅✅✅
  issubclass: "es subclase" # ✅✅✅✅✅✅✅
  iter: "iterador" # ✅✅✅✅✅✅✅
  len: "longitud" # ✅✅✅✅✅✅✅
  list: "lista" # ✅✅✅✅✅✅✅
  locals: "locales" # ✅✅✅✅✅✅✅
  map: "mapa" # ✅✅✅✅✅✅✅
  max: "máximo" # ✅✅✅✅✅✅
  memoryview: "vista de memoria" # ✅✅✅✅✅✅✅
  min: "mínimo" # ✅✅✅✅✅✅
  next: "siguiente" # ✅✅✅✅✅✅✅
  object: "objeto" # ✅✅✅✅✅✅✅
  oct: "octal" # ✅✅✅✅✅✅✅
  open: "abrir" # ✅✅✅✅✅✅
  ord: "representación unicode" # I don't know how I would traslate this ❓What about "código unicode"? ✅ I agree with "representación unicode" ❓ not entirely sure on this one, código unicode sounds okay✅❓The literal way to translate this one is impossible, but the action is accuarate with the word written there.❓I don't know how I would traslate thi
  pow: "potencia" # ✅✅✅✅✅✅✅
  print: "imprimir" # ✅✅✅✅✅✅✅
  property: "propiedad" # ✅✅✅✅✅✅✅
  range: "rango" # ✅✅✅✅✅✅✅
  repr: "representación" # ✅✅✅✅✅✅
  reversed: "invertido" # ✅✅✅✅✅✅✅
  round: "redondear" # ✅✅✅✅✅✅✅
  set: "asignar" # ✅✅ it is not the direct translation but in this context it makes sense ✅✅✅✅✅
  setattr: "asignar atributo" # ✅✅✅✅✅✅✅
  slice: "cortar" # ✅✅✅✅✅✅
  sorted: "ordenado" ✅✅✅✅✅
  staticmethod: "método estático" # ✅✅✅✅✅✅✅
  str: "cadena de texto" # ✅✅✅✅✅✅Also it's possible to say "cadena de caracteres"✅
  sum: "suma" # ✅✅✅✅✅✅✅
  super: "superior" # ✅❓ What about using padre? ❓I think this should be just "super" as it is the way an object allows the developer to refer to its parent class ✅ keeping super would make sense, I agree with that✅ "super" sound fine✅ But also "padre" or "super" can be considered as valid✅"super" sound fine
  tuple: "tupla" # ✅✅✅✅✅✅✅
  type: "tipo" # ✅✅✅✅✅✅✅
  vars: "variables" # ✅✅✅✅✅✅✅
  zip: "zip" # ✅✅ can't be direct translated ✅✅✅✅✅
  __import__: "importar" # ✅✅✅✅✅✅✅
```

---

## Formal reviews

### @jaimegarjr — 2021-01-08 (COMMENTED)

Hey! So this is what I ended up thinking about the given words in the description of the PR. I wasn't sure how to go about reviewing this other than just going line by line talking about the words in more detail. Let me know if this was okay! I'll be leaving this review as a comment as I know this is mainly up for discussion before completely approving these changes. I'm up for discussion on some of these terms, and eventually about the built-in functions. Thanks!

### @begeistert — 2023-03-31 (CHANGES_REQUESTED)

Most of the translation is excellent, it only needs a few changes

---

## Line-by-line review comments

_Below: every inline comment on `locale/es.yml` during the review. Quoted verbatim with reviewer attribution and line number from the original file._

#### [@jaimegarjr](https://github.com/jaimegarjr) — `locale/es.yml:1256` (2021-01-08)

[Original comment](https://github.com/legesher/legesher-translations/pull/186#discussion_r553670961)

> I believe that keeping afirmar would be the best decision as it seems to translate pretty well from assert. I also notice that a lot of other reviewers thought the same, and so maybe afirmar should stay.

#### [@jaimegarjr](https://github.com/jaimegarjr) — `locale/es.yml:1259` (2021-01-08)

[Original comment](https://github.com/legesher/legesher-translations/pull/186#discussion_r553671849)

> I still think interrumpir should translate for break - romper's direct translation does mean break, but I've mainly used the word to mean rip or ripping something off in English, so this sounds wrong to me.

#### [@jaimegarjr](https://github.com/jaimegarjr) — `locale/es.yml:1262` (2021-01-08)

[Original comment](https://github.com/legesher/legesher-translations/pull/186#discussion_r553672522)

> Although the direct translation is definir, both words make the keyword longer, and should probably stay as def in my opinion. Let me know if this still is up for debate!

#### [@jaimegarjr](https://github.com/jaimegarjr) — `locale/es.yml:1263` (2021-01-08)

[Original comment](https://github.com/legesher/legesher-translations/pull/186#discussion_r553672846)

> I originally believed leaving del as it is would be okay, but probably making the keyword eliminar is the best. Borrar sounds more like erasing to me than it does deleting.

#### [@jaimegarjr](https://github.com/jaimegarjr) — `locale/es.yml:1264` (2021-01-08)

[Original comment](https://github.com/legesher/legesher-translations/pull/186#discussion_r553673841)

> The phrase si no, si is the best direct translation - however, it makes the one keyword lengthy. I think no, si or no si is a good way to go to help new users learn the terms a little easier (could be made into nosi like elif is currently defined). Keeping it this way would also be consistent with the translation of if being si.

#### [@jaimegarjr](https://github.com/jaimegarjr) — `locale/es.yml:1271` (2021-01-08)

[Original comment](https://github.com/legesher/legesher-translations/pull/186#discussion_r553672133)

> The word si seems to be agreed on, this is okay.

#### [@jaimegarjr](https://github.com/jaimegarjr) — `locale/es.yml:1275` (2021-01-08)

[Original comment](https://github.com/legesher/legesher-translations/pull/186#discussion_r553674174)

> As mentioned, the word lambda is a Greek letter, and doesn't seem to have a clear cut translation for Spanish. I'd keep this keyword as such.

#### [@jaimegarjr](https://github.com/jaimegarjr) — `locale/es.yml:1280` (2021-01-08)

[Original comment](https://github.com/legesher/legesher-translations/pull/186#discussion_r553674390)

> Generar (generate) is okay, but a translation that makes more sense to me now that I think about it is levanta (like raising up).

#### [@jaimegarjr](https://github.com/jaimegarjr) — `locale/es.yml:1281` (2021-01-08)

[Original comment](https://github.com/legesher/legesher-translations/pull/186#discussion_r553674783)

> Personally, I've never used retorna, so this word seems unlikely for me to use. Regresa translates a lot better in my opinion, and should be the used keyword.

#### [@jaimegarjr](https://github.com/jaimegarjr) — `locale/es.yml:1282` (2021-01-08)

[Original comment](https://github.com/legesher/legesher-translations/pull/186#discussion_r553675157)

> Both intenta and tratar translate okay for the word try, but personally I like tratar better. It seems to translate better than intenta, maybe new users would look to use tratar instead. This could be changed later on down the line based on user's wants if necessary.

#### [@jaimegarjr](https://github.com/jaimegarjr) — `locale/es.yml:1285` (2021-01-08)

[Original comment](https://github.com/legesher/legesher-translations/pull/186#discussion_r553675421)

> This one is another iffy one, but I still like entregar. Again, it makes a little more sense to me than retornar, which I've personally never used before.

#### [@begeistert](https://github.com/begeistert) — `locale/es.yml:1512` (2023-03-31)

[Original comment](https://github.com/legesher/legesher-translations/pull/186#discussion_r1154082020)

> I think `lanzar` makes more sense in this case

#### [@begeistert](https://github.com/begeistert) — `locale/es.yml:1604` (2023-03-31)

[Original comment](https://github.com/legesher/legesher-translations/pull/186#discussion_r1154081403)

> The singular `binario` seems to be the most appropriate decision

#### [@begeistert](https://github.com/begeistert) — `locale/es.yml:1631` (2023-03-31)

[Original comment](https://github.com/legesher/legesher-translations/pull/186#discussion_r1154080377)

> The right translation should be `arreglo de bytes`

#### [@begeistert](https://github.com/begeistert) — `locale/es.yml:1640` (2023-03-31)

[Original comment](https://github.com/legesher/legesher-translations/pull/186#discussion_r1154083008)

> The word `bytes` fits better

#### [@begeistert](https://github.com/begeistert) — `locale/es.yml:1649` (2023-03-31)

[Original comment](https://github.com/legesher/legesher-translations/pull/186#discussion_r1154083396)

> Based on the documentation `invocable` fits better in this case

#### [@begeistert](https://github.com/begeistert) — `locale/es.yml:1721` (2023-03-31)

[Original comment](https://github.com/legesher/legesher-translations/pull/186#discussion_r1154084653)

> A better translation can be `cociente y resto`

#### [@begeistert](https://github.com/begeistert) — `locale/es.yml:1730` (2023-03-31)

[Original comment](https://github.com/legesher/legesher-translations/pull/186#discussion_r1154085117)

> I agree that `enumerar` es mejor

#### [@begeistert](https://github.com/begeistert) — `locale/es.yml:1739` (2023-03-31)

[Original comment](https://github.com/legesher/legesher-translations/pull/186#discussion_r1154085430)

> `evaluar` is a better option here

#### [@begeistert](https://github.com/begeistert) — `locale/es.yml:2045` (2023-03-31)

[Original comment](https://github.com/legesher/legesher-translations/pull/186#discussion_r1154086798)

> `representación` fits better here

#### [@begeistert](https://github.com/begeistert) — `locale/es.yml:2135` (2023-03-31)

[Original comment](https://github.com/legesher/legesher-translations/pull/186#discussion_r1154087540)

> `super` is a valid word in Spanish

#### [@begeistert](https://github.com/begeistert) — `locale/es.yml:2180` (2023-03-31)

[Original comment](https://github.com/legesher/legesher-translations/pull/186#discussion_r1154088189)

> `__importar__` is better to avoid confusion between `importar`
