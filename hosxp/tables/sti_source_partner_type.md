# `sti_source_partner_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sti_source_partner_type_id | int(11) | NO | PRI | 0 |  |  |
| sti_source_partner_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_sti_source_partner_type_name | sti_source_partner_type_name | yes | 1 |
| PRIMARY | sti_source_partner_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "sti_source_partner_type_id": 1,
    "sti_source_partner_type_name": "ผู้ให้บริการทางเพศ",
    "hos_guid": null
  },
  {
    "sti_source_partner_type_id": 2,
    "sti_source_partner_type_name": "สามี/ภรรยา",
    "hos_guid": null
  },
  {
    "sti_source_partner_type_id": 3,
    "sti_source_partner_type_name": "คู่นอนประจำ",
    "hos_guid": null
  },
  {
    "sti_source_partner_type_id": 4,
    "sti_source_partner_type_name": "คู่นอนชั่วคราว",
    "hos_guid": null
  },
  {
    "sti_source_partner_type_id": 5,
    "sti_source_partner_type_name": "ผู้ซื้อบริการ (ลูกค้า/แขก)",
    "hos_guid": null
  },
  {
    "sti_source_partner_type_id": 6,
    "sti_source_partner_type_name": "อื่นๆ",
    "hos_guid": null
  }
]
```
