# `lab_specimen_items`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| specimen_code | int(11) | NO | PRI | 0 |  |  |
| specimen_name | varchar(150) | YES |  | NULL |  |  |
| specimen_note | varchar(250) | YES |  | NULL |  |  |
| ecode | varchar(10) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| colab_specimen_name | varchar(100) | YES |  | NULL |  |  |
| colab_specimen_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | specimen_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "specimen_code": 1,
    "specimen_name": "โลหิต",
    "specimen_note": null,
    "ecode": null,
    "hos_guid": null,
    "colab_specimen_name": null,
    "colab_specimen_id": null
  },
  {
    "specimen_code": 2,
    "specimen_name": "น้ำเหลือง",
    "specimen_note": null,
    "ecode": null,
    "hos_guid": null,
    "colab_specimen_name": null,
    "colab_specimen_id": null
  },
  {
    "specimen_code": 3,
    "specimen_name": "น้ำลาย",
    "specimen_note": null,
    "ecode": null,
    "hos_guid": null,
    "colab_specimen_name": null,
    "colab_specimen_id": null
  },
  {
    "specimen_code": 4,
    "specimen_name": "ปัสสาวะ",
    "specimen_note": null,
    "ecode": null,
    "hos_guid": null,
    "colab_specimen_name": null,
    "colab_specimen_id": null
  },
  {
    "specimen_code": 5,
    "specimen_name": "Body Fluid",
    "specimen_note": null,
    "ecode": null,
    "hos_guid": null,
    "colab_specimen_name": null,
    "colab_specimen_id": null
  },
  {
    "specimen_code": 6,
    "specimen_name": "CLOTTED BLOOD",
    "specimen_note": null,
    "ecode": null,
    "hos_guid": null,
    "colab_specimen_name": null,
    "colab_specimen_id": null
  },
  {
    "specimen_code": 7,
    "specimen_name": "Slide or Sputum",
    "specimen_note": null,
    "ecode": null,
    "hos_guid": null,
    "colab_specimen_name": null,
    "colab_specimen_id": null
  },
  {
    "specimen_code": 8,
    "specimen_name": "EDTA Blood",
    "specimen_note": null,
    "ecode": null,
    "hos_guid": null,
    "colab_specimen_name": null,
    "colab_specimen_id": null
  }
]
```
