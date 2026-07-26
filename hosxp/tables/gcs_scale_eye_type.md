# `gcs_scale_eye_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| gcs_scale_eye_type_id | int(11) | NO | PRI | 0 |  |  |
| gcs_scale_eye_type_name | varchar(200) | YES | UNI | NULL |  |  |
| score | int(11) | YES |  | NULL |  |  |
| export_code | char(1) | YES |  | NULL |  |  |
| prefix_code | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_gcs_scale_eye_type_name | gcs_scale_eye_type_name | yes | 1 |
| PRIMARY | gcs_scale_eye_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "gcs_scale_eye_type_id": 1,
    "gcs_scale_eye_type_name": "None",
    "score": null,
    "export_code": null,
    "prefix_code": null
  },
  {
    "gcs_scale_eye_type_id": 2,
    "gcs_scale_eye_type_name": "To pain",
    "score": null,
    "export_code": null,
    "prefix_code": null
  },
  {
    "gcs_scale_eye_type_id": 3,
    "gcs_scale_eye_type_name": "To loud voice",
    "score": null,
    "export_code": null,
    "prefix_code": null
  },
  {
    "gcs_scale_eye_type_id": 4,
    "gcs_scale_eye_type_name": "Spontaneous",
    "score": null,
    "export_code": null,
    "prefix_code": null
  },
  {
    "gcs_scale_eye_type_id": 0,
    "gcs_scale_eye_type_name": "Unknown",
    "score": null,
    "export_code": null,
    "prefix_code": null
  }
]
```
