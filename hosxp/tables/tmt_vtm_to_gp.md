# `tmt_vtm_to_gp`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vtm_code | varchar(10) | YES | MUL | NULL |  |  |
| gp_code | varchar(10) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_uni | vtm_code | yes | 1 |
| ix_uni | gp_code | yes | 2 |
| ix_uni_index | gp_code | yes | 1 |
| ix_uni_index | vtm_code | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vtm_code": "1000309",
    "gp_code": "1000313"
  },
  {
    "vtm_code": "1000350",
    "gp_code": "1000366"
  },
  {
    "vtm_code": "1000776",
    "gp_code": "1000782"
  },
  {
    "vtm_code": "1001346",
    "gp_code": "361464"
  },
  {
    "vtm_code": "1001346",
    "gp_code": "361515"
  },
  {
    "vtm_code": "1001712",
    "gp_code": "1288883"
  },
  {
    "vtm_code": "1001899",
    "gp_code": "1001909"
  },
  {
    "vtm_code": "1001950",
    "gp_code": "550341"
  }
]
```
