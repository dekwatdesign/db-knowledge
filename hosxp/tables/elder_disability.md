# `elder_disability`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| elder_disability_id | int(11) | NO | PRI | 0 |  |  |
| elder_disability_name | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | elder_disability_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "elder_disability_id": 1,
    "elder_disability_name": "บุคคลที่มีความบกพร่องทางการเห็น",
    "hos_guid": null
  },
  {
    "elder_disability_id": 2,
    "elder_disability_name": "การได้ยิน",
    "hos_guid": null
  },
  {
    "elder_disability_id": 3,
    "elder_disability_name": "ทางสติปัญญา",
    "hos_guid": null
  },
  {
    "elder_disability_id": 4,
    "elder_disability_name": "ทางร่างกาย หรือการเคลื่อนไหว หรือสุขภาพ",
    "hos_guid": null
  },
  {
    "elder_disability_id": 5,
    "elder_disability_name": "ทางการเรียนรู้",
    "hos_guid": null
  },
  {
    "elder_disability_id": 6,
    "elder_disability_name": "ทางการเรียนรู้",
    "hos_guid": null
  },
  {
    "elder_disability_id": 7,
    "elder_disability_name": "ทางพฤติกรรม หรืออารมณ์",
    "hos_guid": null
  },
  {
    "elder_disability_id": 8,
    "elder_disability_name": "ออทิสติก",
    "hos_guid": null
  }
]
```
