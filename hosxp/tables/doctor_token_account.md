# `doctor_token_account`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_token_account_id | int(11) | NO | PRI | 0 |  |  |
| doctor_code | varchar(25) | YES | MUL | NULL |  |  |
| token_account_type_id | int(11) | YES | MUL | NULL |  |  |
| key1 | varchar(250) | YES |  | NULL |  |  |
| key2 | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor_code | doctor_code | no | 1 |
| ix_doctor_code_type | token_account_type_id | yes | 1 |
| ix_doctor_code_type | doctor_code | yes | 2 |
| ix_doctor_code_type_index | doctor_code | yes | 1 |
| ix_doctor_code_type_index | token_account_type_id | yes | 2 |
| PRIMARY | doctor_token_account_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "doctor_token_account_id": 1,
    "doctor_code": "318",
    "token_account_type_id": 1,
    "key1": "SV-1640573141",
    "key2": "rKMFJqtLTYkcGTWmNTUTvayAVsGWWWjOmIsHGbfyvfiAkUrNBc"
  },
  {
    "doctor_token_account_id": 3,
    "doctor_code": "068",
    "token_account_type_id": 1,
    "key1": "CZ-1726043371862408177",
    "key2": "qWeGhFvQwMbRpyTLqbephOwfhpbCAgUXKgFXCwKJPPmMnrYmfx"
  },
  {
    "doctor_token_account_id": 4,
    "doctor_code": "187",
    "token_account_type_id": 1,
    "key1": "CN-1740540207212806600",
    "key2": "RcmqPqxkfpMiDJUEEogaPReSjbOwQiZrWYUGEYXsvafWwWeCsv"
  },
  {
    "doctor_token_account_id": 5,
    "doctor_code": "0009",
    "token_account_type_id": 1,
    "key1": "CZ-1740624090031650177",
    "key2": "kAAxNGXAaaKefHppGBJdculijWbGegEQbLovqSMWmQojTyAIhN"
  },
  {
    "doctor_token_account_id": 6,
    "doctor_code": "0048",
    "token_account_type_id": 1,
    "key1": "CZ-1731483129999429689",
    "key2": "litvKsIfwpfTDFVMcAruVRyDflrkRDrqwcbBwkGNXriHtXqxZX"
  },
  {
    "doctor_token_account_id": 7,
    "doctor_code": "065",
    "token_account_type_id": 1,
    "key1": "CZ-1740385078320305162",
    "key2": "cFeTeVnNUAURtZwKyrXQieGDHmojfpEPJwwCeeaebTBvvgGOMA"
  },
  {
    "doctor_token_account_id": 8,
    "doctor_code": "066",
    "token_account_type_id": 1,
    "key1": "CZ-1740474969423735449",
    "key2": "eHIWRofEneJPHfvZwRkLXSfhDoXKVDWfQGePVusNBYBfNiTErq"
  }
]
```
