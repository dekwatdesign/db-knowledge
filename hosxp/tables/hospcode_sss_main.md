# `hospcode_sss_main`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | varchar(10) | NO | PRI |  |  |  |
| name | varchar(200) | YES | MUL | NULL |  |  |
| hosptype | varchar(100) | YES |  | NULL |  |  |
| chwpart | char(2) | YES | MUL | NULL |  |  |
| amppart | char(2) | YES | MUL | NULL |  |  |
| regimentcode | char(2) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| amppart | amppart | no | 1 |
| chwpart | chwpart | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| name | name | no | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "0210006",
    "name": "นพรัตนราชธานี",
    "hosptype": "รพ.",
    "chwpart": "10",
    "amppart": "27",
    "regimentcode": "11",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "0210009",
    "name": "ราชวิถี",
    "hosptype": "รพ.",
    "chwpart": "10",
    "amppart": "37",
    "regimentcode": "11",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "0210011",
    "name": "เลิดสิน",
    "hosptype": "รพ.",
    "chwpart": "10",
    "amppart": "04",
    "regimentcode": "11",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "0211001",
    "name": "สมุทรปราการ",
    "hosptype": "รพท.",
    "chwpart": "11",
    "amppart": "01",
    "regimentcode": "11",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "0211024",
    "name": "บางบ่อ",
    "hosptype": "-",
    "chwpart": "11",
    "amppart": "",
    "regimentcode": "11",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "0212001",
    "name": "สถาบันบำราศนราดูร",
    "hosptype": "รพ.",
    "chwpart": "12",
    "amppart": "01",
    "regimentcode": "11",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "0212003",
    "name": "พระนั่งเกล้า",
    "hosptype": "รพท.",
    "chwpart": "12",
    "amppart": "01",
    "regimentcode": "11",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "0212016",
    "name": "ชลประทาน",
    "hosptype": "รพ.",
    "chwpart": "12",
    "amppart": "00",
    "regimentcode": "05",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
