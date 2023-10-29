use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	AccountPDA,
	Record,
};


/// Register the given amount as an income for the given record account. The total total_balance of the account will be increased.
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` user_record: [Record] 
///
/// Data:
/// - amount: [u32] The amount to be registered as the income.
/// - user_record_seed_signer: [Pubkey] Auto-generated, from input user_record of type [Record] set the seed named signer, required by the type
pub fn register_income(
	program_id: &Pubkey,
	user_record: &mut AccountPDA<Record>,
	amount: u32,
) -> ProgramResult {
    // Implement your business logic here...
    user_record.data.moves += 1;
user_record.data.income += amount;
user_record.data.total_balance += amount as i64;






    Ok(())
}