# `asthma_bronchodilator_medication`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| asthma_bronchodilator_medication_id | int(11) | NO | PRI | 0 |  |  |
| asthma_bronchodilator_medication_name | varchar(200) | YES | UNI | NULL |  |  |
| asthma_bronchodilator_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_asthma_bronchodilator_medication_name | asthma_bronchodilator_medication_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | asthma_bronchodilator_medication_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "asthma_bronchodilator_medication_id": 1,
    "asthma_bronchodilator_medication_name": "Beclomethasone",
    "asthma_bronchodilator_type_id": 3,
    "hos_guid": null
  },
  {
    "asthma_bronchodilator_medication_id": 2,
    "asthma_bronchodilator_medication_name": "Budesonide",
    "asthma_bronchodilator_type_id": 3,
    "hos_guid": null
  },
  {
    "asthma_bronchodilator_medication_id": 3,
    "asthma_bronchodilator_medication_name": "Fluticasone",
    "asthma_bronchodilator_type_id": 3,
    "hos_guid": null
  },
  {
    "asthma_bronchodilator_medication_id": 4,
    "asthma_bronchodilator_medication_name": "Salmeterol",
    "asthma_bronchodilator_type_id": 2,
    "hos_guid": null
  },
  {
    "asthma_bronchodilator_medication_id": 5,
    "asthma_bronchodilator_medication_name": "Formoterol",
    "asthma_bronchodilator_type_id": 2,
    "hos_guid": null
  },
  {
    "asthma_bronchodilator_medication_id": 6,
    "asthma_bronchodilator_medication_name": "Salbutamol",
    "asthma_bronchodilator_type_id": 1,
    "hos_guid": null
  },
  {
    "asthma_bronchodilator_medication_id": 7,
    "asthma_bronchodilator_medication_name": "Tebutaline",
    "asthma_bronchodilator_type_id": 1,
    "hos_guid": null
  },
  {
    "asthma_bronchodilator_medication_id": 8,
    "asthma_bronchodilator_medication_name": "Procaterol",
    "asthma_bronchodilator_type_id": 1,
    "hos_guid": null
  }
]
```
