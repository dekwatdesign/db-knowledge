# `opd_ill_history`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | NO | PRI |  |  |  |
| cc_negative_operation | char(1) | YES |  | NULL |  |  |
| cc_persist_disease | varchar(250) | YES |  | NULL |  |  |
| cc_operation_name | varchar(250) | YES |  | NULL |  |  |
| cc_operation_year | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| has_persist_disease | char(1) | YES |  | NULL |  |  |
| has_operation | char(1) | YES |  | NULL |  |  |
| cc_negative_disease | char(1) | YES |  | NULL |  |  |
| cc_negative_convulsion | char(1) | YES |  | NULL |  |  |
| cc_negative_head_injure | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | hn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "hn": "470000013",
    "cc_negative_operation": "N",
    "cc_persist_disease": "",
    "cc_operation_name": "",
    "cc_operation_year": 0,
    "hos_guid": null,
    "hos_guid_ext": null,
    "has_persist_disease": null,
    "has_operation": null,
    "cc_negative_disease": null,
    "cc_negative_convulsion": null,
    "cc_negative_head_injure": null
  },
  {
    "hn": "530000152",
    "cc_negative_operation": "Y",
    "cc_persist_disease": "",
    "cc_operation_name": "",
    "cc_operation_year": 0,
    "hos_guid": null,
    "hos_guid_ext": null,
    "has_persist_disease": null,
    "has_operation": null,
    "cc_negative_disease": null,
    "cc_negative_convulsion": null,
    "cc_negative_head_injure": null
  },
  {
    "hn": "530000153",
    "cc_negative_operation": "N",
    "cc_persist_disease": "",
    "cc_operation_name": "",
    "cc_operation_year": 0,
    "hos_guid": null,
    "hos_guid_ext": null,
    "has_persist_disease": null,
    "has_operation": null,
    "cc_negative_disease": null,
    "cc_negative_convulsion": null,
    "cc_negative_head_injure": null
  },
  {
    "hn": "530000243",
    "cc_negative_operation": "N",
    "cc_persist_disease": "",
    "cc_operation_name": "",
    "cc_operation_year": 0,
    "hos_guid": null,
    "hos_guid_ext": null,
    "has_persist_disease": null,
    "has_operation": null,
    "cc_negative_disease": null,
    "cc_negative_convulsion": null,
    "cc_negative_head_injure": null
  },
  {
    "hn": "530000249",
    "cc_negative_operation": "N",
    "cc_persist_disease": "",
    "cc_operation_name": "",
    "cc_operation_year": 0,
    "hos_guid": null,
    "hos_guid_ext": null,
    "has_persist_disease": null,
    "has_operation": null,
    "cc_negative_disease": null,
    "cc_negative_convulsion": null,
    "cc_negative_head_injure": null
  },
  {
    "hn": "530000251",
    "cc_negative_operation": "N",
    "cc_persist_disease": "",
    "cc_operation_name": "",
    "cc_operation_year": 0,
    "hos_guid": null,
    "hos_guid_ext": null,
    "has_persist_disease": null,
    "has_operation": null,
    "cc_negative_disease": null,
    "cc_negative_convulsion": null,
    "cc_negative_head_injure": null
  },
  {
    "hn": "530000252",
    "cc_negative_operation": "Y",
    "cc_persist_disease": "",
    "cc_operation_name": "",
    "cc_operation_year": 0,
    "hos_guid": null,
    "hos_guid_ext": null,
    "has_persist_disease": null,
    "has_operation": null,
    "cc_negative_disease": null,
    "cc_negative_convulsion": null,
    "cc_negative_head_injure": null
  },
  {
    "hn": "530000254",
    "cc_negative_operation": "N",
    "cc_persist_disease": "",
    "cc_operation_name": "",
    "cc_operation_year": 0,
    "hos_guid": null,
    "hos_guid_ext": null,
    "has_persist_disease": null,
    "has_operation": null,
    "cc_negative_disease": null,
    "cc_negative_convulsion": null,
    "cc_negative_head_injure": null
  }
]
```
