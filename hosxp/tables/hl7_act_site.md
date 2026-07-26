# `hl7_act_site`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hl7_act_site_code | varchar(10) | NO | PRI |  |  |  |
| hl7_act_site_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hl7_act_site_name | hl7_act_site_name | yes | 1 |
| PRIMARY | hl7_act_site_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "hl7_act_site_code": "LA",
    "hl7_act_site_name": "แขนซ้าย"
  },
  {
    "hl7_act_site_code": "RA",
    "hl7_act_site_name": "แขนขวา"
  }
]
```
