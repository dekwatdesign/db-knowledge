# `copd_bronchodilator_medication`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| copd_bronchodilator_medication_id | int(11) | NO | PRI | 0 |  |  |
| copd_bronchodilator_medication_name | varchar(200) | YES | UNI | NULL |  |  |
| copd_bronchodilator_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_copd_bronchodilator_medication_name | copd_bronchodilator_medication_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | copd_bronchodilator_medication_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "copd_bronchodilator_medication_id": 1,
    "copd_bronchodilator_medication_name": "Beclomethasone",
    "copd_bronchodilator_type_id": 3,
    "hos_guid": null
  },
  {
    "copd_bronchodilator_medication_id": 2,
    "copd_bronchodilator_medication_name": "Budesonide",
    "copd_bronchodilator_type_id": 3,
    "hos_guid": null
  },
  {
    "copd_bronchodilator_medication_id": 3,
    "copd_bronchodilator_medication_name": "Fluticasone",
    "copd_bronchodilator_type_id": 3,
    "hos_guid": null
  },
  {
    "copd_bronchodilator_medication_id": 4,
    "copd_bronchodilator_medication_name": "Salmeterol",
    "copd_bronchodilator_type_id": 2,
    "hos_guid": null
  },
  {
    "copd_bronchodilator_medication_id": 5,
    "copd_bronchodilator_medication_name": "Formoterol",
    "copd_bronchodilator_type_id": 2,
    "hos_guid": null
  },
  {
    "copd_bronchodilator_medication_id": 6,
    "copd_bronchodilator_medication_name": "Salbutamol",
    "copd_bronchodilator_type_id": 1,
    "hos_guid": null
  },
  {
    "copd_bronchodilator_medication_id": 7,
    "copd_bronchodilator_medication_name": "Tebutaline",
    "copd_bronchodilator_type_id": 1,
    "hos_guid": null
  },
  {
    "copd_bronchodilator_medication_id": 8,
    "copd_bronchodilator_medication_name": "Procaterol",
    "copd_bronchodilator_type_id": 1,
    "hos_guid": null
  }
]
```
