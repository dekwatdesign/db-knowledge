# `med_recon_detail_acc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| med_recon_detail_acc_id | int(11) | NO | PRI | 0 |  |  |
| med_recon_detail_id | int(11) | YES | MUL | NULL |  |  |
| doctor_code | varchar(25) | YES | MUL | NULL |  |  |
| acc_date_time | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dt | med_recon_detail_id | no | 1 |
| ix_dt_dc | med_recon_detail_id | yes | 1 |
| ix_dt_dc | doctor_code | yes | 2 |
| ix_dt_dc_index | doctor_code | yes | 1 |
| ix_dt_dc_index | med_recon_detail_id | yes | 2 |
| PRIMARY | med_recon_detail_acc_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "med_recon_detail_acc_id": 1,
    "med_recon_detail_id": 1,
    "doctor_code": "291",
    "acc_date_time": "2025-01-09 14:22:38"
  },
  {
    "med_recon_detail_acc_id": 2,
    "med_recon_detail_id": 2,
    "doctor_code": "291",
    "acc_date_time": "2025-01-09 14:22:38"
  },
  {
    "med_recon_detail_acc_id": 3,
    "med_recon_detail_id": 3,
    "doctor_code": "291",
    "acc_date_time": "2025-01-09 14:22:38"
  },
  {
    "med_recon_detail_acc_id": 4,
    "med_recon_detail_id": 4,
    "doctor_code": "291",
    "acc_date_time": "2025-01-09 14:22:38"
  },
  {
    "med_recon_detail_acc_id": 5,
    "med_recon_detail_id": 25,
    "doctor_code": "335",
    "acc_date_time": "2025-12-25 13:38:16"
  },
  {
    "med_recon_detail_acc_id": 6,
    "med_recon_detail_id": 26,
    "doctor_code": "335",
    "acc_date_time": "2025-12-25 13:38:16"
  },
  {
    "med_recon_detail_acc_id": 7,
    "med_recon_detail_id": 27,
    "doctor_code": "335",
    "acc_date_time": "2025-12-25 13:38:16"
  }
]
```
