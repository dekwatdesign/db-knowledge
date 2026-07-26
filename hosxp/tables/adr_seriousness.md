# `adr_seriousness`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| adr_seriousness_id | int(11) | NO | PRI | 0 |  |  |
| adr_seriousness_name | varchar(250) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_adr_seriousness_name | adr_seriousness_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | adr_seriousness_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "adr_seriousness_id": 1,
    "adr_seriousness_name": "ไม่ร้ายแรง (Non-serious)",
    "hos_guid": null
  },
  {
    "adr_seriousness_id": 2,
    "adr_seriousness_name": "ร้ายแรง - เสียชีวิต (Death)",
    "hos_guid": null
  },
  {
    "adr_seriousness_id": 3,
    "adr_seriousness_name": "ร้ายแรง - อัตรายถึงชีวิต (Life-threatening)",
    "hos_guid": null
  },
  {
    "adr_seriousness_id": 4,
    "adr_seriousness_name": "ร้ายแรง - ต้องเข้ารับการรักษาในโรงพยาบาล (Hospitalization-initial)",
    "hos_guid": null
  },
  {
    "adr_seriousness_id": 5,
    "adr_seriousness_name": "ร้ายแรง - ทำให้เพิ่มระยะเวลาในการรักษานานขึ้น (Hospitalization-prolonged)",
    "hos_guid": null
  },
  {
    "adr_seriousness_id": 6,
    "adr_seriousness_name": "ร้ายแรง - พิการ (Disability)",
    "hos_guid": null
  },
  {
    "adr_seriousness_id": 7,
    "adr_seriousness_name": "ร้ายแรง - เป็นเหตุให้เกิดความผิดปกติแต่กำเนิด (Congenital anomaly)",
    "hos_guid": null
  }
]
```
