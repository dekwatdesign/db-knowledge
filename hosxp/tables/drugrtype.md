# `drugrtype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rcode | char(1) | NO | PRI |  |  |  |
| rtype | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | rcode | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "rcode": "1",
    "rtype": "การเบิกเงินอื่น ๆ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "rcode": "2",
    "rtype": "ตกลงราคา",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "rcode": "3",
    "rtype": "สอบราคา",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "rcode": "4",
    "rtype": "ประกวดราคา",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "rcode": "5",
    "rtype": "พิเศษ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "rcode": "6",
    "rtype": "กรณีพิเศษ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "rcode": "7",
    "rtype": "บริจาค",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
