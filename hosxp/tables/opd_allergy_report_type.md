# `opd_allergy_report_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_allergy_report_type_id | int(11) | NO | PRI | 0 |  |  |
| opd_allergy_report_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_opd_allergy_report_type_name | opd_allergy_report_type_name | yes | 1 |
| PRIMARY | opd_allergy_report_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "opd_allergy_report_type_id": 1,
    "opd_allergy_report_type_name": "Spontaneous reporting system",
    "hos_guid": null
  },
  {
    "opd_allergy_report_type_id": 2,
    "opd_allergy_report_type_name": "Trigger tools",
    "hos_guid": null
  },
  {
    "opd_allergy_report_type_id": 3,
    "opd_allergy_report_type_name": "Intensive",
    "hos_guid": null
  },
  {
    "opd_allergy_report_type_id": 4,
    "opd_allergy_report_type_name": "Crinical trial",
    "hos_guid": null
  }
]
```
