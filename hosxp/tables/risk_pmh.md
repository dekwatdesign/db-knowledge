# `risk_pmh`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| risk_pmh_id | int(11) | NO | PRI | 0 |  |  |
| risk_pmh_name | varchar(50) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | risk_pmh_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "risk_pmh_id": 10,
    "risk_pmh_name": "2.1    โรคเบาหวาน (DM)",
    "hos_guid": null
  },
  {
    "risk_pmh_id": 20,
    "risk_pmh_name": "          ถ้ามี มากกว่า 10 ปี หรือไม่",
    "hos_guid": null
  },
  {
    "risk_pmh_id": 30,
    "risk_pmh_name": "                มีปัญหาโรคไต หรือไม่",
    "hos_guid": null
  },
  {
    "risk_pmh_id": 40,
    "risk_pmh_name": "          โรคเบาหวานขณะตั้งครรภ์ หรือไม่",
    "hos_guid": null
  },
  {
    "risk_pmh_id": 50,
    "risk_pmh_name": "2.2    โรคความดันโลหิตสูง (HT)",
    "hos_guid": null
  },
  {
    "risk_pmh_id": 60,
    "risk_pmh_name": "2.3    โรคตับ",
    "hos_guid": null
  },
  {
    "risk_pmh_id": 70,
    "risk_pmh_name": "2.4    โรคอัมพาต",
    "hos_guid": null
  },
  {
    "risk_pmh_id": 80,
    "risk_pmh_name": "2.5    โรคหัวใจ",
    "hos_guid": null
  }
]
```
