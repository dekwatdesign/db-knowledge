# `gcs_scale_motor_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| gcs_scale_motor_type_id | int(11) | NO | PRI | 0 |  |  |
| gcs_scale_motor_type_name | varchar(200) | YES | UNI | NULL |  |  |
| score | int(11) | YES |  | NULL |  |  |
| prefix_code | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_gcs_scale_motor_type_name | gcs_scale_motor_type_name | yes | 1 |
| PRIMARY | gcs_scale_motor_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "gcs_scale_motor_type_id": 1,
    "gcs_scale_motor_type_name": "None - 1",
    "score": null,
    "prefix_code": null
  },
  {
    "gcs_scale_motor_type_id": 2,
    "gcs_scale_motor_type_name": "Extension posturing - 2",
    "score": null,
    "prefix_code": null
  },
  {
    "gcs_scale_motor_type_id": 3,
    "gcs_scale_motor_type_name": "Abnormal flexion posturing - 3",
    "score": null,
    "prefix_code": null
  },
  {
    "gcs_scale_motor_type_id": 4,
    "gcs_scale_motor_type_name": "Withdraws (flexion) - 4",
    "score": null,
    "prefix_code": null
  },
  {
    "gcs_scale_motor_type_id": 5,
    "gcs_scale_motor_type_name": "Localizes - 5",
    "score": null,
    "prefix_code": null
  },
  {
    "gcs_scale_motor_type_id": 6,
    "gcs_scale_motor_type_name": "Obeys - 6",
    "score": null,
    "prefix_code": null
  },
  {
    "gcs_scale_motor_type_id": 0,
    "gcs_scale_motor_type_name": "Unknown - 0",
    "score": null,
    "prefix_code": null
  }
]
```
