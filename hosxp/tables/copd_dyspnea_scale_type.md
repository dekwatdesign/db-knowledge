# `copd_dyspnea_scale_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| copd_dyspnea_scale_type_id | int(11) | NO | PRI | 0 |  |  |
| copd_dyspnea_scale_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_copd_dyspnea_scale_type_name | copd_dyspnea_scale_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | copd_dyspnea_scale_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "copd_dyspnea_scale_type_id": 1,
    "copd_dyspnea_scale_type_name": "ระดับ 0",
    "hos_guid": null
  },
  {
    "copd_dyspnea_scale_type_id": 2,
    "copd_dyspnea_scale_type_name": "ระดับ 1",
    "hos_guid": null
  },
  {
    "copd_dyspnea_scale_type_id": 3,
    "copd_dyspnea_scale_type_name": "ระดับ 2",
    "hos_guid": null
  },
  {
    "copd_dyspnea_scale_type_id": 4,
    "copd_dyspnea_scale_type_name": "ระดับ 3",
    "hos_guid": null
  },
  {
    "copd_dyspnea_scale_type_id": 5,
    "copd_dyspnea_scale_type_name": "ระดับ 4",
    "hos_guid": null
  },
  {
    "copd_dyspnea_scale_type_id": 9,
    "copd_dyspnea_scale_type_name": "ไม่ได้ประเมิน",
    "hos_guid": null
  }
]
```
