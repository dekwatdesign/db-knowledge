# `asthma_dyspnea_scale_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| asthma_dyspnea_scale_type_id | int(11) | NO | PRI | 0 |  |  |
| asthma_dyspnea_scale_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_asthma_dyspnea_scale_type_name | asthma_dyspnea_scale_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | asthma_dyspnea_scale_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "asthma_dyspnea_scale_type_id": 1,
    "asthma_dyspnea_scale_type_name": "ระดับ 0",
    "hos_guid": null
  },
  {
    "asthma_dyspnea_scale_type_id": 2,
    "asthma_dyspnea_scale_type_name": "ระดับ 1",
    "hos_guid": null
  },
  {
    "asthma_dyspnea_scale_type_id": 3,
    "asthma_dyspnea_scale_type_name": "ระดับ 2",
    "hos_guid": null
  },
  {
    "asthma_dyspnea_scale_type_id": 4,
    "asthma_dyspnea_scale_type_name": "ระดับ 3",
    "hos_guid": null
  },
  {
    "asthma_dyspnea_scale_type_id": 5,
    "asthma_dyspnea_scale_type_name": "ระดับ 4",
    "hos_guid": null
  },
  {
    "asthma_dyspnea_scale_type_id": 9,
    "asthma_dyspnea_scale_type_name": "ไม่ได้ประเมิน",
    "hos_guid": null
  }
]
```
