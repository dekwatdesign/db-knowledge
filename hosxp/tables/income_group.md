# `income_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| income_group | char(2) | NO | PRI |  |  |  |
| name | varchar(150) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| ename | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | income_group | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "income_group": "01",
    "name": "ค่าบริการชันสูตรโรค",
    "hos_guid": null,
    "hos_guid_ext": null,
    "ename": null
  },
  {
    "income_group": "02",
    "name": "ค่าบริการคลังเลือด",
    "hos_guid": null,
    "hos_guid_ext": null,
    "ename": null
  },
  {
    "income_group": "03",
    "name": "ค่าบริการพยาธิวิทยา",
    "hos_guid": null,
    "hos_guid_ext": null,
    "ename": null
  },
  {
    "income_group": "04",
    "name": "ค่าบริการรังสีวิทยา",
    "hos_guid": null,
    "hos_guid_ext": null,
    "ename": null
  },
  {
    "income_group": "05",
    "name": "ค่าบริการตรวจวินิจฉัยอื่นๆ",
    "hos_guid": null,
    "hos_guid_ext": null,
    "ename": null
  },
  {
    "income_group": "06",
    "name": "ค่าบริการผ่าตัด",
    "hos_guid": null,
    "hos_guid_ext": null,
    "ename": null
  },
  {
    "income_group": "07",
    "name": "ค่าบริการระงับความรู้สึก",
    "hos_guid": null,
    "hos_guid_ext": null,
    "ename": null
  },
  {
    "income_group": "08",
    "name": "ค่าอวัยวะเทียม",
    "hos_guid": null,
    "hos_guid_ext": null,
    "ename": null
  }
]
```
