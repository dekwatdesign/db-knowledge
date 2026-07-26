# `ovst_sks_finance`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_sks_finance_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | UNI | NULL |  |  |
| finance_staff | varchar(25) | YES |  | NULL |  |  |
| finance_datetime | datetime | YES |  | NULL |  |  |
| sks_reimb_user_type_id | int(11) | YES |  | NULL |  |  |
| sks_benefit_plan_type_id | int(11) | YES |  | NULL |  |  |
| sks_benefit_dispense_status_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_vn | vn | yes | 1 |
| PRIMARY | ovst_sks_finance_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ovst_sks_finance_id": 1,
    "vn": "590216083842",
    "finance_staff": null,
    "finance_datetime": null,
    "sks_reimb_user_type_id": null,
    "sks_benefit_plan_type_id": null,
    "sks_benefit_dispense_status_id": 1,
    "hos_guid": null
  },
  {
    "ovst_sks_finance_id": 2,
    "vn": "590216091316",
    "finance_staff": null,
    "finance_datetime": null,
    "sks_reimb_user_type_id": null,
    "sks_benefit_plan_type_id": null,
    "sks_benefit_dispense_status_id": 1,
    "hos_guid": null
  },
  {
    "ovst_sks_finance_id": 3,
    "vn": "590216091908",
    "finance_staff": null,
    "finance_datetime": null,
    "sks_reimb_user_type_id": null,
    "sks_benefit_plan_type_id": null,
    "sks_benefit_dispense_status_id": 1,
    "hos_guid": null
  },
  {
    "ovst_sks_finance_id": 4,
    "vn": "590216083044",
    "finance_staff": null,
    "finance_datetime": null,
    "sks_reimb_user_type_id": null,
    "sks_benefit_plan_type_id": null,
    "sks_benefit_dispense_status_id": 1,
    "hos_guid": null
  },
  {
    "ovst_sks_finance_id": 5,
    "vn": "590216073759",
    "finance_staff": null,
    "finance_datetime": null,
    "sks_reimb_user_type_id": null,
    "sks_benefit_plan_type_id": null,
    "sks_benefit_dispense_status_id": 1,
    "hos_guid": null
  },
  {
    "ovst_sks_finance_id": 6,
    "vn": "590216095106",
    "finance_staff": null,
    "finance_datetime": null,
    "sks_reimb_user_type_id": null,
    "sks_benefit_plan_type_id": null,
    "sks_benefit_dispense_status_id": 1,
    "hos_guid": null
  },
  {
    "ovst_sks_finance_id": 7,
    "vn": "590216101430",
    "finance_staff": null,
    "finance_datetime": null,
    "sks_reimb_user_type_id": null,
    "sks_benefit_plan_type_id": null,
    "sks_benefit_dispense_status_id": 1,
    "hos_guid": null
  },
  {
    "ovst_sks_finance_id": 8,
    "vn": "590216114544",
    "finance_staff": null,
    "finance_datetime": null,
    "sks_reimb_user_type_id": null,
    "sks_benefit_plan_type_id": null,
    "sks_benefit_dispense_status_id": 1,
    "hos_guid": null
  }
]
```
