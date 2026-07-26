# `rcpt_form`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| name | varchar(150) | NO | PRI |  |  |  |
| bill_order | tinyint(4) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | name | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "name": "ค่าดมยา",
    "bill_order": 5,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "ค่าตรวจทางห้องปฏิบัติการ",
    "bill_order": 1,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "ค่าบริการทางการแพทย์",
    "bill_order": 3,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "ค่าผ่าตัด",
    "bill_order": 4,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "ค่ายา",
    "bill_order": 6,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "ค่าห้อง .... วัน/...... บาท",
    "bill_order": 9,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "ค่าห้องบำบัด (ICU)",
    "bill_order": 8,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "ค่าอาหาร ..... วัน/ ..... บาท",
    "bill_order": 10,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
