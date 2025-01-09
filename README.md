deletePaymentById(recId: number) {
  this.isLoading = true; // Set isLoading to true at the start

  this.service.deletePrescriptionPaymentById(this.formId, recId).pipe(
    tap(() => console.log('Delete request successful')), // Optional: Log success
    delay(3000), // Wait for 3 seconds
    tap(() => this.fillPrescriptionPayments()), // Call the method to refresh payments
    finalize(() => {
      this.isLoading = false; // Set isLoading to false after everything is done
    })
  ).subscribe({
    error: (err) => {
      console.error('Error deleting payment:', err); // Handle errors if any
    },
  });
}
