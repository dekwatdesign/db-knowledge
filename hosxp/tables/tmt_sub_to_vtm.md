# `tmt_sub_to_vtm`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| substance_code | varchar(6) | YES | MUL | NULL |  |  |
| vtm_code | varchar(6) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_uni | substance_code | yes | 1 |
| ix_uni | vtm_code | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "substance_code": "100133",
    "vtm_code": "100134"
  },
  {
    "substance_code": "100133",
    "vtm_code": "115454"
  },
  {
    "substance_code": "100183",
    "vtm_code": "100189"
  },
  {
    "substance_code": "100185",
    "vtm_code": "100189"
  },
  {
    "substance_code": "100185",
    "vtm_code": "100794"
  },
  {
    "substance_code": "100185",
    "vtm_code": "100979"
  },
  {
    "substance_code": "100202",
    "vtm_code": "100204"
  },
  {
    "substance_code": "100224",
    "vtm_code": "100226"
  }
]
```
