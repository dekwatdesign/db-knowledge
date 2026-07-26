# `patient_lang`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lang | varchar(2) | NO | PRI |  |  |  |
| lang_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lang_name | lang_name | yes | 1 |
| PRIMARY | lang | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "lang": "TH",
    "lang_name": "ไทย"
  },
  {
    "lang": "EN",
    "lang_name": "อังกฤษ"
  }
]
```
