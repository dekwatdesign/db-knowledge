# `income_nk2`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nk2_group | int(11) | NO | PRI | 0 |  |  |
| name | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | nk2_group | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "nk2_group": 1,
    "name": "ค่าบริการชันสูตรโรค",
    "hos_guid": null
  },
  {
    "nk2_group": 2,
    "name": "ค่าบริการคลังเลือด",
    "hos_guid": null
  },
  {
    "nk2_group": 3,
    "name": "ค่าบริการพยาธิวิทยา",
    "hos_guid": null
  },
  {
    "nk2_group": 4,
    "name": "ค่าบริการรังสีวิทยา",
    "hos_guid": null
  },
  {
    "nk2_group": 5,
    "name": "ค่าบริการตรวจวินิจฉัยอื่นๆ",
    "hos_guid": null
  },
  {
    "nk2_group": 6,
    "name": "ค่าบริการผ่าตัด",
    "hos_guid": null
  },
  {
    "nk2_group": 7,
    "name": "ค่าบริการระงับความรู้สึก",
    "hos_guid": null
  },
  {
    "nk2_group": 8,
    "name": "ค่าอวัยวะเทียม",
    "hos_guid": null
  }
]
```
