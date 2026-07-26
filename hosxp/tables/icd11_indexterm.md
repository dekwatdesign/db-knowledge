# `icd11_indexterm`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | varchar(10) | NO | PRI | NULL |  |  |
| ordinal | int(11) | NO | PRI | NULL |  |  |
| term | varchar(500) | NO | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_fx_term | term | no | 1 |
| ix_term | term | no | 1 |
| PRIMARY | code | yes | 1 |
| PRIMARY | ordinal | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "LB74.4",
    "ordinal": 0,
    "term": "Congenital coxa valga"
  },
  {
    "code": "XM85F8",
    "ordinal": 0,
    "term": "Mercaptamine"
  },
  {
    "code": "XM70G2",
    "ordinal": 0,
    "term": "Ponatinib"
  },
  {
    "code": "XM7J43",
    "ordinal": 0,
    "term": "Sodium mersalate"
  },
  {
    "code": "XM41B9",
    "ordinal": 0,
    "term": "Mussel seafood poison"
  },
  {
    "code": "XM41B9",
    "ordinal": 1,
    "term": "mytilotoxin"
  },
  {
    "code": "NC56.4Y",
    "ordinal": 0,
    "term": "Other specified injury of blood vessel of thumb"
  },
  {
    "code": "NC56.4Z",
    "ordinal": 0,
    "term": "Injury of blood vessel of thumb, unspecified"
  }
]
```
