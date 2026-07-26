# `paidst`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| paidst | char(2) | NO | PRI |  |  |  |
| name | varchar(50) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | paidst | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "paidst": "00",
    "name": "ค้างชำระ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "paidst": "01",
    "name": "ชำระเองเบิกได้",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "paidst": "02",
    "name": "ลูกหนี้สิทธิ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "paidst": "03",
    "name": "ชำระเองเบิกไม่ได้",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "paidst": "04",
    "name": "ส่วนลดเงินสด",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
