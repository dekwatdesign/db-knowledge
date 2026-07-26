# `patient_cancer_calculation_param`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_cancer_calculation_param_id | int(11) | NO | PRI | 0 |  |  |
| patient_cancer_calculation_param_name | varchar(100) | YES |  | NULL |  |  |
| lookup_table | varchar(100) | YES |  | NULL |  |  |
| lookup_field_name | varchar(50) | YES |  | NULL |  |  |
| lookup_field_id | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | patient_cancer_calculation_param_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "patient_cancer_calculation_param_id": 1,
    "patient_cancer_calculation_param_name": "Machine",
    "lookup_table": "cancer_machine",
    "lookup_field_name": "cancer_machine_name",
    "lookup_field_id": "cancer_machine_id",
    "hos_guid": null
  },
  {
    "patient_cancer_calculation_param_id": 2,
    "patient_cancer_calculation_param_name": "Site treat",
    "lookup_table": "cancer_region",
    "lookup_field_name": "cancer_region_name",
    "lookup_field_id": "cancer_region_id",
    "hos_guid": null
  },
  {
    "patient_cancer_calculation_param_id": 3,
    "patient_cancer_calculation_param_name": "Technique",
    "lookup_table": "cancer_cure_technic",
    "lookup_field_name": "cancer_cure_technic_name",
    "lookup_field_id": "cancer_cure_technic_id",
    "hos_guid": null
  },
  {
    "patient_cancer_calculation_param_id": 4,
    "patient_cancer_calculation_param_name": "Colin-X",
    "lookup_table": null,
    "lookup_field_name": null,
    "lookup_field_id": null,
    "hos_guid": null
  },
  {
    "patient_cancer_calculation_param_id": 5,
    "patient_cancer_calculation_param_name": "Colin-X1",
    "lookup_table": null,
    "lookup_field_name": null,
    "lookup_field_id": null,
    "hos_guid": null
  },
  {
    "patient_cancer_calculation_param_id": 6,
    "patient_cancer_calculation_param_name": "Colin-X2",
    "lookup_table": null,
    "lookup_field_name": null,
    "lookup_field_id": null,
    "hos_guid": null
  },
  {
    "patient_cancer_calculation_param_id": 7,
    "patient_cancer_calculation_param_name": "Colin-Y",
    "lookup_table": null,
    "lookup_field_name": null,
    "lookup_field_id": null,
    "hos_guid": null
  },
  {
    "patient_cancer_calculation_param_id": 8,
    "patient_cancer_calculation_param_name": "Colin-Y1",
    "lookup_table": null,
    "lookup_field_name": null,
    "lookup_field_id": null,
    "hos_guid": null
  }
]
```
